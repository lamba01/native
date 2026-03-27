import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    FlatList,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type Option = {
  label: string;
  value: string;
};

type CustomDropdownProps = {
  options: Option[];
  placeholder?: string;
  onSelect: (value: string) => void;
};

export default function CustomDropdown({
  options,
  placeholder = "Select an option",
  onSelect,
}: CustomDropdownProps) {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);

  const handleSelect = (item: Option) => {
    setSelected(item);
    onSelect(item.value);
    setVisible(false);
  };

  return (
    <View>
      {/* Trigger Button */}
      <TouchableOpacity style={styles.trigger} onPress={() => setVisible(true)}>
        <Text style={[styles.triggerText, !selected && styles.placeholder]}>
          {selected ? selected.label : placeholder}
        </Text>
        <Ionicons
          name={visible ? "chevron-up" : "chevron-down"}
          size={18}
          color="#666"
        />
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={visible} transparent animationType="fade">
        {/* Backdrop — closes modal when tapped outside */}
        <TouchableOpacity
          style={styles.backdrop}
          onPress={() => setVisible(false)}
          activeOpacity={1}
        >
          {/* Dropdown Box */}
          <View style={styles.dropdown}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.option,
                    selected?.value === item.value && styles.selectedOption,
                  ]}
                  onPress={() => handleSelect(item)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selected?.value === item.value &&
                        styles.selectedOptionText,
                    ]}
                  >
                    {item.label}
                  </Text>
                  {selected?.value === item.value && (
                    <Ionicons name="checkmark" size={18} color="brown" />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  trigger: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#242424",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 0,
    backgroundColor: "#242424",
    width: "50%",
  },
  triggerText: {
    fontSize: 16,
    color: "#fff",
  },
  placeholder: {
    color: "#fff",
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    padding: 20,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  selectedOption: {
    backgroundColor: "#fff",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  selectedOptionText: {
    color: "brown",
    fontWeight: "600",
  },
});

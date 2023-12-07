import { View } from "react-native";
import { StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, size, color, onPress }) {
    return <Pressable style={({ pressed }) => pressed && styles.pressed }>
        <View style={styles.buttonContainer}>
            <Ionicons name={icon} size={size} color={color} onPress={onPress} />
        </View>
    </Pressable>
}

export default IconButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2,
    },
    pressed: {
        opacity: 0.75,
    }
});
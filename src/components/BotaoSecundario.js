import { TouchableOpacity, Text, StyleSheet } from "react-native";

const BotaoSecundario = (props) => {
    const text = props.text;
    const color = props.color || "#419ED7";

    const buttonStyle = {
        ...styles.fundoBotao,
        backgroundColor: color,
    };

    return (
        <TouchableOpacity style={buttonStyle} onPress={props.funcao}>
            <Text style={styles.textoBotao}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textoBotao: {
        fontSize: 24,
        color: "white",
        textAlign: "center",
        fontFamily: "AveriaLibre-Regular",
    },
    fundoBotao: {
        padding: 5,
        width: "100%",
        marginTop: 10,
    },
});

export default BotaoSecundario;
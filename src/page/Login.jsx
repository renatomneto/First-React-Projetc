import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native'; //Pressable pode colocar imagens no botão
import Logo from '../assets/ifood_logo.png';
import LottieView from 'lottie-react-native';
import MainPage from './MainPage';

export default function Login() {
    const [button, setbutton] = useState(false);
    const [main, setMain] = useState(false);

    const animation = useRef(null);
    const firstRun = useRef(true);

    useEffect(() => {
        if (firstRun.current) {
            firstRun.current = false;
        } else {
            animation.current.play(44, 5);
        }
    }, [button])

    return (
        <View style={styles.container}>
            <Image source={Logo}
                resizeMode='stretch'
                style={styles.image}
            />
            <View style={styles.conteudo}>
                <Text style={styles.title}>Portal do Parceiro!</Text>
                <Text style={styles.info}>Gerencie sua loja de maneira fácil e rápida.</Text>

            </View>

            <View style={styles.caixaemail}>
                <Text>E-mail</Text>
                <TextInput
                    style={styles.textinput}
                    placeholder='nome@email.com.br'
                />
            </View>
            <View style= {styles.botao}>
                <TouchableOpacity onPress={() => setbutton(!button)}>
                    <Text style={{
                        // zIndex: 10,
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: '900',
                        color: 'white',
                        // position: 'relative',

                    }}>Avançar</Text>
                    <LottieView
                        source={require('../assets/animation_lo0d6shq.json')}
                        autoPlay={false}
                        loop={false}

                        style={{
                            width: 100,
                            height: 80,
                        }}
                        ref={animation}
                    />
                </TouchableOpacity>

                <Pressable style = {({pressed}) => [
                    {
                        
                        backgroundColor: pressed ? 'rgb(163, 26, 26)' : 'red',
                    },
                    styles.botao,
                    ]}>
                    <Text style = {styles.textoBotao}>Avançar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { //nome do estilo
        flex: 1, //flex = 1 -> view ocupar todo o espaço do aplicativo
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: 256,
        height: 135,
        //margin: 10, -> ideia
    },

    conteudo: {

    },

    title: {
        fontSize: 38,
        fontWeight: '700',
        marginTop: 35,
        marginBottom: 5,
        textAlign: 'center',
        color: 'grey',
    },

    info: {
        fontSize: 20,
        textAlign: 'center',
        color: 'lightgrey',


    },

    textinput: {
        borderWidth: 2,
        marginTop: 7,
        padding: 10,
        height: 50,
        borderRadius: 10,
        borderColor: 'red',
        width: 350,

    },

    caixaemail: {
        marginTop: 20,
    },

    botao: {
        borderWidth: 2,
        marginTop: 5,
        padding: 10,
        height: 50,
        borderRadius: 15,
        borderColor: 'transparent',
        // backgroundColor: 'rgb(163, 26, 26)',
        alignItems: 'center',
        alignSelf: 'center',
        width: 250,
    },
    botaoPressionado: {
        borderWidth: 2,
        marginTop: 30,
        padding: 10,
        height: 50,
        borderRadius: 15,
        borderColor: 'red',
        backgroundColor: 'red',
        alignItems: 'center',
        alignSelf: 'center',
        width: 250,
    },

    textoBotao: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '900',
        color: 'white'
    }
});

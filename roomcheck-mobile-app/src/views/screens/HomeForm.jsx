

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Keyboard, Alert, AsyncStorage} from 'react-native';
import COLORS from '../../conts/colors';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';

const HomeForm = ({ navigation }) => {
    

    const [inputs, setInputs] = React.useState({
        DNI: '',
        name: '',
        surname: '',
        email: '',
        phone: '',
        place: '',
    });
    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const validate = () => {
        Keyboard.dismiss();
        let valid = true;
        if (!inputs.email) {
            handleError('Campo obligatorio', 'email');
            valid = false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
            handleError('Ingrese un correo válido', 'email');
        }

        if (!inputs.name) {
            handleError('Campo obligatorio', 'name');
        }

        if (!inputs.surname) {
            handleError('Campo obligatorio', 'surname');
        }
        if (!inputs.phone) {
            handleError('Campo obligatorio', 'phone');
        }
        if (!inputs.DNI) {
            handleError('Campo obligatorio', 'DNI');
        }
        if (!inputs.place) {
            handleError('Campo obligatorio', 'place');
        }
        if (valid) {
            register();
        }
    };

    const register = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            try {
                AsyncStorage.setItem('user', JSON.stringify(inputs));
                navigation.navigate('DetalleReserva');
            } catch (error) {
                Alert.alert("Error","Something went wrong")
            }
        }, 3000);
    };

    const handleOnChange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }))
    };
    const handleError = (errorMessage, input) => {
        setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
    };
    return <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
        <Loader visible = {loading}/>
        <ScrollView contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
            <Text style={{ color: COLORS.black, fontSize: 30, fontWeight: 'bold' }}>Información Personal</Text>
            <Text style={{ color: COLORS.grey, fontSize: 15, marginVertical: 10 }}>Ingrese su información para realizar la reserva:</Text>
            <View style={{ marginVertical: 20 }}>
                <Input
                    keyboardType="numeric"
                    placeholder="Ingrese su identificación"
                    iconName="credit-card-outline"
                    label="DNI"
                    error={errors.DNI}
                    onFocus={() => {
                        handleError(null, 'DNI');
                    }}
                    onChangeText={(text) => handleOnChange(text, 'DNI')}
                />
                <Input
                    placeholder="Ingrese sus nombres"
                    iconName="account-outline"
                    label="NOMBRES"
                    error={errors.name}
                    onFocus={() => {
                        handleError(null, 'name');
                    }}
                    onChangeText={(text) => handleOnChange(text, 'name')}
                />
                <Input
                    placeholder="Ingrese sus apellidos"
                    iconName="account-outline"
                    label="APELLIDOS"
                    error={errors.surname}
                    onFocus={() => {
                        handleError(null, 'surname');
                    }}
                    onChangeText={(text) => handleOnChange(text, 'surname')}
                />
                <Input
                    placeholder="Ingrese su e-mail"
                    iconName="email-outline"
                    label="E-MAIL"
                    error={errors.email}
                    onFocus={() => {
                        handleError(null, 'email');
                    }}
                    onChangeText={(text) => handleOnChange(text, 'email')}
                />
                <Input
                    keyboardType="numeric"
                    placeholder="Ingrese su celular"
                    iconName="phone-outline"
                    label="CELULAR"
                    error={errors.phone}
                    onFocus={() => {
                        handleError(null, 'phone');
                    }}
                    onChangeText={(text) => handleOnChange(text, 'phone')}
                />
                <Input
                    placeholder="Ingrese su país de origen"
                    iconName="map-marker-outline"
                    label="País de Origen"
                    error={errors.place}
                    onFocus={() => {
                        handleError(null, 'place');
                    }}
                    onChangeText={(text) => handleOnChange(text, 'place')}
                />
                <Button title="Continuar" onPress={validate }   />
            </View>
        </ScrollView>
    </SafeAreaView>;
};

export default HomeForm;
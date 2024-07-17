import { View, Text, ScrollView, Image } from "react-native";
import React,{useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { Link, router } from "expo-router";
import FormField from "../../components/FormField.jsx";
import CustomButton from "../../components/CustomButton.jsx";
const SignIn = () => {
  const [form, setForm] = useState({
    email:'',
    password:'',
  })
  const [isSubmitting, setisSubmitting ] = useState(false);
  const submit =()=>{

  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full min-h-[85vh] px-4 my-6 justify-center">
          <Image
            source={images.logo}
            className="w-[130px] h-[81px] "
            resizeMode="contain"
          />
          <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>Sign in to Aora</Text>
          <FormField 
            title='Email'
            value ={form.email}
            handleChangeText={(e)=>setForm({...form,email: e})}
            otherStyles='mt-7'
            keyboardType='email-address'
          />
          <FormField 
            title='Password'
            value ={form.password}
            handleChangeText={(e)=>setForm({...form,password: e})}
            otherStyles='mt-7'
          />
          
          <CustomButton 
          title='Log In'
          handlePress={submit}
          containerStyles='mt-7'
          isLoading={isSubmitting}
           />
           <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular '>Don't have a account</Text>
            <Link href='/sign-up' className='text-lg font-psemibold text-secondary'>Sign Up</Link>

           </View>
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

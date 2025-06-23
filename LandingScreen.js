import { LinearGradient } from 'expo-linear-gradient';
import { Image, TouchableOpacity, Text, View } from 'react-native';

export default function LandingScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#0f172a', '#1e3a8a']}
      className="flex-1 justify-center items-center p-6"
    >
      <Image 
        source={require('../assets/raversus-logo.png')} 
        className="w-64 h-64 mb-12"
      />
      <Text className="text-3xl font-bold text-white mb-2">RAVERSUS Iridology</Text>
      <Text className="text-lg text-gray-300 mb-12">AI-powered eye health analysis</Text>
      
      <TouchableOpacity 
        onPress={() => navigation.navigate('Camera')}
        className="bg-blue-600 px-8 py-4 rounded-full"
      >
        <Text className="text-white font-bold text-lg">Start Analysis</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

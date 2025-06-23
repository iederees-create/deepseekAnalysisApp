import { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';

export default function AnalysisScreen({ route, navigation }) {
  const [progress, setProgress] = useState(0);
  const { photoPath } = route.params;

  useEffect(() => {
    const uploadAndAnalyze = async () => {
      try {
        // Upload photo to backend
        const formData = new FormData();
        formData.append('eyePhoto', {
          uri: photoPath,
          type: 'image/jpeg',
          name: 'eye_photo.jpg'
        });

        // Simulate analysis progress
        const interval = setInterval(() => {
          setProgress(prev => {
            const newProgress = prev + 5;
            if (newProgress >= 100) {
              clearInterval(interval);
              // Get real results from backend
              fetchResults();
            }
            return newProgress;
          });
        }, 300);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchResults = async () => {
      const response = await fetch('https://api.raversus.com/analyze', {
        method: 'POST',
        body: formData
      });
      const results = await response.json();
      navigation.navigate('Results', { results });
    };

    uploadAndAnalyze();
  }, []);

  return (
    <View className="flex-1 bg-gray-900 justify-center items-center p-8">
      <LottieView
        source={require('../assets/scan-animation.json')}
        autoPlay
        loop
        style={{ width: 200, height: 200 }}
      />
      <Text className="text-white text-xl mt-8">Analyzing Eye Structures</Text>
      <Text className="text-blue-400 text-lg mt-2">{progress}% complete</Text>
    </View>
  );
}

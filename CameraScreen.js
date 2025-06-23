import { Camera } from 'react-native-vision-camera';
import { useCallback, useState, useEffect } from 'react';

export default function CameraScreen({ navigation }) {
  const [cameraPermission, setCameraPermission] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const camera = useRef(null);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setCameraPermission(status === 'authorized');
    })();
  }, []);

  const takePhoto = useCallback(async () => {
    if (camera.current) {
      const photo = await camera.current.takePhoto({
        qualityPrioritization: 'quality',
        flash: 'off'
      });
      navigation.navigate('Analysis', { photoPath: photo.path });
    }
  }, []);

  return (
    <View className="flex-1 bg-black">
      {cameraPermission && (
        <Camera
          ref={camera}
          photo={true}
          isActive={isActive}
          className="flex-1"
          device={devices.back}
        />
      )}
      
      <TouchableOpacity 
        onPress={takePhoto}
        className="absolute bottom-10 self-center w-20 h-20 rounded-full border-4 border-white"
      />
    </View>
  );
}

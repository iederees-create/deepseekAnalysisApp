export default function ResultsScreen({ route }) {
  const { results } = route.params;
  
  return (
    <ScrollView className="flex-1 bg-gray-100 p-6">
      <View className="bg-white rounded-xl p-6 mb-6 shadow-md">
        <Text className="text-2xl font-bold text-gray-900 mb-4">Iridology Report</Text>
        
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-800">Health Indicators</Text>
          {results.healthIndicators.map((item, index) => (
            <View key={index} className="flex-row items-center mt-3">
              <View className={`w-3 h-3 rounded-full mr-2 ${item.severity === 'high' ? 'bg-red-500' : item.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'}`} />
              <Text className="text-gray-700">{item.label}: {item.value}</Text>
            </View>
          ))}
        </View>

        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-800">Diagnosis</Text>
          <Text className="text-gray-700 mt-2">{results.diagnosis}</Text>
        </View>

        <View>
          <Text className="text-lg font-semibold text-gray-800">Recommended Protocols</Text>
          {results.protocols.map((protocol, index) => (
            <View key={index} className="mt-3 p-4 bg-blue-50 rounded-lg">
              <Text className="font-bold text-blue-800">{protocol.name}</Text>
              <Text className="text-gray-700 mt-1">{protocol.description}</Text>
              <Text className="text-gray-500 text-sm mt-2">Duration: {protocol.duration}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

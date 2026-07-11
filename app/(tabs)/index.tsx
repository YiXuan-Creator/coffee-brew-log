import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Button, StyleSheet, TextInput, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';


export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const textColor = colorScheme === 'dark' ? '#fff' : '#000';
  const [beans, setBeans] = useState([
    { id: 1, origin: '衣索比亞', roaster: '某烘焙商' },
    { id: 2, origin: '巴西', roaster: '某烘焙商' },
  ]);

  const [doseWeight, setDoseWeight] = useState('');
  const [ratio, setRatio] = useState(15);
  const [waterTemp, setWaterTemp] = useState('');

  function addBean() {
    const newBean = {
      id: beans.length + 1,
      origin: '肯亞',
      roaster: '測試烘焙商',
    };
    setBeans([...beans, newBean]);
  }

  const doseWeightNumber = Number(doseWeight);
  const waterWeight = doseWeightNumber > 0 ? doseWeightNumber * ratio : 0;

  function submitBrewLog() {
    console.log('送出的沖煮紀錄：', { doseWeight, ratio, waterWeight, waterTemp });
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        <ThemedText type="title">我的咖啡豆</ThemedText>

        <Button title="新增測試豆子" onPress={addBean} />

        {beans.map((bean) => (
          <ThemedView key={bean.id} style={styles.beanCard}>
            <ThemedText type="subtitle">{bean.origin}</ThemedText>
            <ThemedText>{bean.roaster}</ThemedText>
          </ThemedView>
        ))}

        <ThemedText type="title">新增沖煮紀錄</ThemedText>

        <TextInput
          style={[styles.input, { color: textColor }]}
          placeholderTextColor={colorScheme === 'dark' ? '#999' : '#666'}
          value={doseWeight}
          onChangeText={setDoseWeight}
          placeholder="粉重 (g)"
          keyboardType="numeric"
        />

        <ThemedText>粉水比</ThemedText>
        <Picker selectedValue={ratio} onValueChange={setRatio} style={{ color: textColor }}>
          <Picker.Item label="1:12" value={12} />
          <Picker.Item label="1:13" value={13} />
          <Picker.Item label="1:14" value={14} />
          <Picker.Item label="1:15" value={15} />
          <Picker.Item label="1:16" value={16} />
        </Picker>

        <ThemedText type="subtitle">水重：{waterWeight} g</ThemedText>

        <TextInput
          style={[styles.input, { color: textColor }]}
          placeholderTextColor={colorScheme === 'dark' ? '#999' : '#666'}
          value={waterTemp}
          onChangeText={setWaterTemp}
          placeholder="水溫 (°C)"
          keyboardType="numeric"
        />

        <Button title="送出沖煮紀錄" onPress={submitBrewLog} />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  beanCard: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
});
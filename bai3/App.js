import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';  // Sử dụng thư viện Expo Icons để thêm biểu tượng

const NotificationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Phần tiêu đề cố định */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Thông báo</Text>
      </View>

      {/* FlatList để hiển thị danh sách thông báo */}
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.notificationContainer, { backgroundColor: item.backgroundColor }]}>
            <View style={styles.iconContainer}>
              <FontAwesome name={item.icon} size={24} color="#4C8DF5" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,  // Chiều cao của thanh tiêu đề
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 20,  // Kích thước chữ của tiêu đề
    fontWeight: 'bold',
  },
  notificationContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  iconContainer: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});

export default NotificationScreen;

const notifications = [
  {
    id: '1',
    icon: 'check-circle',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    date: '20/08/2020, 06:00',
    backgroundColor: '#E0F7FF',
  },
  {
    id: '2',
    icon: 'users',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    date: '20/08/2020, 06:00',
    backgroundColor: '#FFFFFF',
  },
  {
    id: '3',
    icon: 'users',
    title: 'Khách hàng được chia sẻ bị trùng',
    description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',date: '20/08/2020, 06:00',
    backgroundColor: '#F5F7FB',
  },
  {
    id: '4',
    icon: 'users',
    title: 'Khách hàng được thêm bị trùng',
    description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
    date: '20/08/2020, 06:00',
    backgroundColor: '#E0F7FF',
  },
  {
    id: '5',
    icon: 'check-circle',
    title: 'Công việc sắp đến hạn trong hôm nay',
    description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    date: '20/08/2020, 06:00',
    backgroundColor: '#FFFFFF',
  },
  {
    id: '6',
    icon: 'check-circle',
    title: 'Công việc đã quá hạn',
    description: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    date: '20/08/2020, 06:00',
    backgroundColor: '#FFFFFF',
  }
];
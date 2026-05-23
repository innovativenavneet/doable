import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Colors, Radius } from '@/constants/theme';

interface Props {
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

export function CalendarWidget({ selectedDate, onSelectDate }: Props) {
  const [currentMonth, setCurrentMonth] = useState('2023-05-01');

  const markedDates: Record<string, object> = {
    '2023-05-23': {
      customStyles: {
        container: {
          borderWidth: 2,
          borderColor: Colors.primary,
          borderRadius: 20,
          backgroundColor: 'transparent',
        },
        text: { color: Colors.white, fontWeight: '600' },
      },
    },
  };

  if (selectedDate !== '2023-05-23') {
    markedDates[selectedDate] = {
      customStyles: {
        container: {
          backgroundColor: Colors.primary,
          borderRadius: 20,
        },
        text: { color: Colors.white, fontWeight: '700' },
      },
    };
  } else {
    markedDates['2023-05-23'] = {
      customStyles: {
        container: {
          borderWidth: 2,
          borderColor: Colors.primary,
          borderRadius: 20,
          backgroundColor: Colors.primary,
        },
        text: { color: Colors.white, fontWeight: '700' },
      },
    };
  }

  return (
    <View style={styles.wrapper}>
      <Calendar
        current={currentMonth}
        onDayPress={(day) => onSelectDate(day.dateString)}
        onMonthChange={(month) => setCurrentMonth(month.dateString)}
        markedDates={markedDates}
        markingType={'custom' as const}
        initialDate="2023-05-01"
        theme={{
          backgroundColor: Colors.card,
          calendarBackground: Colors.card,
          textSectionTitleColor: Colors.textSecondary,
          selectedDayBackgroundColor: Colors.primary,
          selectedDayTextColor: Colors.white,
          todayTextColor: Colors.primary,
          dayTextColor: Colors.white,
          textDisabledColor: Colors.textMuted,
          monthTextColor: Colors.white,
          arrowColor: Colors.white,
          textDayFontWeight: '500',
          textMonthFontWeight: '700',
          textDayHeaderFontWeight: '500',
          textDayFontSize: 14,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 12,
        }}
        renderArrow={(direction) => (
          <View style={styles.arrowBtn}>
            <Ionicons
              name={direction === 'left' ? 'chevron-back' : 'chevron-forward'}
              size={18}
              color={Colors.white}
            />
          </View>
        )}
        hideExtraDays
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.card,
    borderRadius: Radius.xl,
    overflow: 'hidden',
    marginBottom: 20,
    paddingBottom: 8,
  },
  arrowBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.cardElevated,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

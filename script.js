// ============================================
// Helper function to get day name from date
// ============================================
function getDayName(dateString) {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString + ' 2026');
    return dayNames[date.getDay()];
}

// ============================================
// Helper function to format time from 24h to 12h format
// ============================================
function formatTime(time24) {
    const [hours, minutes] = time24.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
}

// ============================================
// Helper function to format date (e.g., "Feb 19")
// ============================================
function formatDate(dateString) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const d = new Date(dateString);
    const day = d.getDate();
    const month = months[d.getMonth()];
    return `${month} ${day}`;
}

// ============================================
// Prayer Times Data for Different Cities
// ============================================
const prayerTimes = {
    karachi: {
        name: 'Karachi',
        times: [
            { day: 1, date: 'Feb 19', ramadanDay: 1, fajr: '5:47 AM', dhuhr: '12:46 PM', asr: '4:51 PM', maghrib: '6:28 PM', isha: '7:45 PM', sehri: '5:47 AM', iftar: '6:28 PM' },
            { day: 2, date: 'Feb 20', ramadanDay: 2, fajr: '5:46 AM', dhuhr: '12:46 PM', asr: '4:52 PM', maghrib: '6:29 PM', isha: '7:45 PM', sehri: '5:46 AM', iftar: '6:29 PM' },
            { day: 3, date: 'Feb 21', ramadanDay: 3, fajr: '5:45 AM', dhuhr: '12:45 PM', asr: '4:52 PM', maghrib: '6:30 PM', isha: '7:46 PM', sehri: '5:45 AM', iftar: '6:30 PM' },
            { day: 4, date: 'Feb 22', ramadanDay: 4, fajr: '5:45 AM', dhuhr: '12:45 PM', asr: '4:53 PM', maghrib: '6:30 PM', isha: '7:46 PM', sehri: '5:45 AM', iftar: '6:30 PM' },
            { day: 5, date: 'Feb 23', ramadanDay: 5, fajr: '5:44 AM', dhuhr: '12:45 PM', asr: '4:53 PM', maghrib: '6:31 PM', isha: '7:47 PM', sehri: '5:44 AM', iftar: '6:31 PM' },
            { day: 6, date: 'Feb 24', ramadanDay: 6, fajr: '5:43 AM', dhuhr: '12:45 PM', asr: '4:54 PM', maghrib: '6:31 PM', isha: '7:47 PM', sehri: '5:43 AM', iftar: '6:31 PM' },
            { day: 7, date: 'Feb 25', ramadanDay: 7, fajr: '5:42 AM', dhuhr: '12:45 PM', asr: '4:54 PM', maghrib: '6:32 PM', isha: '7:48 PM', sehri: '5:42 AM', iftar: '6:32 PM' },
            { day: 8, date: 'Feb 26', ramadanDay: 8, fajr: '5:41 AM', dhuhr: '12:45 PM', asr: '4:54 PM', maghrib: '6:32 PM', isha: '7:48 PM', sehri: '5:41 AM', iftar: '6:32 PM' },
            { day: 9, date: 'Feb 27', ramadanDay: 9, fajr: '5:41 AM', dhuhr: '12:45 PM', asr: '4:55 PM', maghrib: '6:33 PM', isha: '7:49 PM', sehri: '5:41 AM', iftar: '6:33 PM' },
            { day: 10, date: 'Feb 28', ramadanDay: 10, fajr: '5:40 AM', dhuhr: '12:44 PM', asr: '4:55 PM', maghrib: '6:33 PM', isha: '7:49 PM', sehri: '5:40 AM', iftar: '6:33 PM' },
            { day: 11, date: 'Mar 01', ramadanDay: 11, fajr: '5:39 AM', dhuhr: '12:44 PM', asr: '4:56 PM', maghrib: '6:34 PM', isha: '7:50 PM', sehri: '5:39 AM', iftar: '6:34 PM' },
            { day: 12, date: 'Mar 02', ramadanDay: 12, fajr: '5:38 AM', dhuhr: '12:44 PM', asr: '4:56 PM', maghrib: '6:34 PM', isha: '7:50 PM', sehri: '5:38 AM', iftar: '6:34 PM' },
            { day: 13, date: 'Mar 03', ramadanDay: 13, fajr: '5:37 AM', dhuhr: '12:44 PM', asr: '4:56 PM', maghrib: '6:35 PM', isha: '7:51 PM', sehri: '5:37 AM', iftar: '6:35 PM' },
            { day: 14, date: 'Mar 04', ramadanDay: 14, fajr: '5:36 AM', dhuhr: '12:44 PM', asr: '4:57 PM', maghrib: '6:35 PM', isha: '7:51 PM', sehri: '5:36 AM', iftar: '6:35 PM' },
            { day: 15, date: 'Mar 05', ramadanDay: 15, fajr: '5:35 AM', dhuhr: '12:43 PM', asr: '4:57 PM', maghrib: '6:36 PM', isha: '7:52 PM', sehri: '5:35 AM', iftar: '6:36 PM' },
            { day: 16, date: 'Mar 06', ramadanDay: 16, fajr: '5:34 AM', dhuhr: '12:43 PM', asr: '4:57 PM', maghrib: '6:36 PM', isha: '7:52 PM', sehri: '5:34 AM', iftar: '6:36 PM' },
            { day: 17, date: 'Mar 07', ramadanDay: 17, fajr: '5:33 AM', dhuhr: '12:43 PM', asr: '4:58 PM', maghrib: '6:37 PM', isha: '7:53 PM', sehri: '5:33 AM', iftar: '6:37 PM' },
            { day: 18, date: 'Mar 08', ramadanDay: 18, fajr: '5:32 AM', dhuhr: '12:43 PM', asr: '4:58 PM', maghrib: '6:37 PM', isha: '7:53 PM', sehri: '5:32 AM', iftar: '6:37 PM' },
            { day: 19, date: 'Mar 09', ramadanDay: 19, fajr: '5:31 AM', dhuhr: '12:42 PM', asr: '4:58 PM', maghrib: '6:38 PM', isha: '7:54 PM', sehri: '5:31 AM', iftar: '6:38 PM' },
            { day: 20, date: 'Mar 10', ramadanDay: 20, fajr: '5:31 AM', dhuhr: '12:42 PM', asr: '4:59 PM', maghrib: '6:38 PM', isha: '7:54 PM', sehri: '5:31 AM', iftar: '6:38 PM' },
            { day: 21, date: 'Mar 11', ramadanDay: 21, fajr: '5:30 AM', dhuhr: '12:42 PM', asr: '4:59 PM', maghrib: '6:39 PM', isha: '7:55 PM', sehri: '5:30 AM', iftar: '6:39 PM' },
            { day: 22, date: 'Mar 12', ramadanDay: 22, fajr: '5:29 AM', dhuhr: '12:42 PM', asr: '4:59 PM', maghrib: '6:39 PM', isha: '7:55 PM', sehri: '5:29 AM', iftar: '6:39 PM' },
            { day: 23, date: 'Mar 13', ramadanDay: 23, fajr: '5:28 AM', dhuhr: '12:42 PM', asr: '5:00 PM', maghrib: '6:40 PM', isha: '7:56 PM', sehri: '5:28 AM', iftar: '6:40 PM' },
            { day: 24, date: 'Mar 14', ramadanDay: 24, fajr: '5:25 AM', dhuhr: '12:41 PM', asr: '5:01 PM', maghrib: '6:41 PM', isha: '7:56 PM', sehri: '5:25 AM', iftar: '6:41 PM' },
            { day: 25, date: 'Mar 15', ramadanDay: 25, fajr: '5:24 AM', dhuhr: '12:41 PM', asr: '5:01 PM', maghrib: '6:42 PM', isha: '7:57 PM', sehri: '5:24 AM', iftar: '6:42 PM' },
            { day: 26, date: 'Mar 16', ramadanDay: 26, fajr: '5:23 AM', dhuhr: '12:41 PM', asr: '5:02 PM', maghrib: '6:42 PM', isha: '7:58 PM', sehri: '5:23 AM', iftar: '6:42 PM' },
            { day: 27, date: 'Mar 17', ramadanDay: 27, fajr: '5:22 AM', dhuhr: '12:40 PM', asr: '5:02 PM', maghrib: '6:43 PM', isha: '7:58 PM', sehri: '5:22 AM', iftar: '6:43 PM' },
            { day: 28, date: 'Mar 18', ramadanDay: 28, fajr: '5:21 AM', dhuhr: '12:40 PM', asr: '5:03 PM', maghrib: '6:43 PM', isha: '7:59 PM', sehri: '5:21 AM', iftar: '6:43 PM' },
            { day: 29, date: 'Mar 19', ramadanDay: 29, fajr: '5:20 AM', dhuhr: '12:40 PM', asr: '5:03 PM', maghrib: '6:43 PM', isha: '7:59 PM', sehri: '5:20 AM', iftar: '6:43 PM' },
            { day: 30, date: 'Mar 20', ramadanDay: 30, fajr: '5:19 AM', dhuhr: '12:39 PM', asr: '5:04 PM', maghrib: '6:44 PM', isha: '8:00 PM', sehri: '5:19 AM', iftar: '6:44 PM' }
        ]
    },
    lahore: {
        name: 'Lahore',
        times: [
            { day: 1, date: 'Feb 19', ramadanDay: 1, fajr: '5:19 AM', dhuhr: '12:16 PM', asr: '4:14 PM', maghrib: '5:53 PM', isha: '7:14 PM', sehri: '5:19 AM', iftar: '5:53 PM' },
            { day: 2, date: 'Feb 20', ramadanDay: 2, fajr: '5:18 AM', dhuhr: '12:16 PM', asr: '4:15 PM', maghrib: '5:53 PM', isha: '7:15 PM', sehri: '5:18 AM', iftar: '5:53 PM' },
            { day: 3, date: 'Feb 21', ramadanDay: 3, fajr: '5:17 AM', dhuhr: '12:16 PM', asr: '4:16 PM', maghrib: '5:54 PM', isha: '7:15 PM', sehri: '5:17 AM', iftar: '5:54 PM' },
            { day: 4, date: 'Feb 22', ramadanDay: 4, fajr: '5:17 AM', dhuhr: '12:16 PM', asr: '4:16 PM', maghrib: '5:55 PM', isha: '7:16 PM', sehri: '5:17 AM', iftar: '5:55 PM' },
            { day: 5, date: 'Feb 23', ramadanDay: 5, fajr: '5:16 AM', dhuhr: '12:16 PM', asr: '4:17 PM', maghrib: '5:56 PM', isha: '7:17 PM', sehri: '5:16 AM', iftar: '5:56 PM' },
            { day: 6, date: 'Feb 24', ramadanDay: 6, fajr: '5:15 AM', dhuhr: '12:16 PM', asr: '4:18 PM', maghrib: '5:57 PM', isha: '7:18 PM', sehri: '5:15 AM', iftar: '5:57 PM' },
            { day: 7, date: 'Feb 25', ramadanDay: 7, fajr: '5:13 AM', dhuhr: '12:16 PM', asr: '4:18 PM', maghrib: '5:57 PM', isha: '7:18 PM', sehri: '5:13 AM', iftar: '5:57 PM' },
            { day: 8, date: 'Feb 26', ramadanDay: 8, fajr: '5:12 AM', dhuhr: '12:16 PM', asr: '4:19 PM', maghrib: '5:58 PM', isha: '7:19 PM', sehri: '5:12 AM', iftar: '5:58 PM' },
            { day: 9, date: 'Feb 27', ramadanDay: 9, fajr: '5:11 AM', dhuhr: '12:15 PM', asr: '4:20 PM', maghrib: '5:59 PM', isha: '7:20 PM', sehri: '5:11 AM', iftar: '5:59 PM' },
            { day: 10, date: 'Feb 28', ramadanDay: 10, fajr: '5:10 AM', dhuhr: '12:15 PM', asr: '4:20 PM', maghrib: '6:00 PM', isha: '7:21 PM', sehri: '5:10 AM', iftar: '6:00 PM' },
            { day: 11, date: 'Mar 01', ramadanDay: 11, fajr: '5:09 AM', dhuhr: '12:15 PM', asr: '4:21 PM', maghrib: '6:00 PM', isha: '7:21 PM', sehri: '5:09 AM', iftar: '6:00 PM' },
            { day: 12, date: 'Mar 02', ramadanDay: 12, fajr: '5:08 AM', dhuhr: '12:15 PM', asr: '4:21 PM', maghrib: '6:01 PM', isha: '7:22 PM', sehri: '5:08 AM', iftar: '6:01 PM' },
            { day: 13, date: 'Mar 03', ramadanDay: 13, fajr: '5:07 AM', dhuhr: '12:15 PM', asr: '4:22 PM', maghrib: '6:02 PM', isha: '7:23 PM', sehri: '5:07 AM', iftar: '6:02 PM' },
            { day: 14, date: 'Mar 04', ramadanDay: 14, fajr: '5:06 AM', dhuhr: '12:14 PM', asr: '4:23 PM', maghrib: '6:03 PM', isha: '7:23 PM', sehri: '5:06 AM', iftar: '6:03 PM' },
            { day: 15, date: 'Mar 05', ramadanDay: 15, fajr: '5:05 AM', dhuhr: '12:14 PM', asr: '4:23 PM', maghrib: '6:03 PM', isha: '7:24 PM', sehri: '5:05 AM', iftar: '6:03 PM' },
            { day: 16, date: 'Mar 06', ramadanDay: 16, fajr: '5:04 AM', dhuhr: '12:14 PM', asr: '4:24 PM', maghrib: '6:04 PM', isha: '7:25 PM', sehri: '5:04 AM', iftar: '6:04 PM' },
            { day: 17, date: 'Mar 07', ramadanDay: 17, fajr: '5:02 AM', dhuhr: '12:14 PM', asr: '4:24 PM', maghrib: '6:05 PM', isha: '7:26 PM', sehri: '5:02 AM', iftar: '6:05 PM' },
            { day: 18, date: 'Mar 08', ramadanDay: 18, fajr: '5:01 AM', dhuhr: '12:13 PM', asr: '4:25 PM', maghrib: '6:06 PM', isha: '7:26 PM', sehri: '5:01 AM', iftar: '6:06 PM' },
            { day: 19, date: 'Mar 09', ramadanDay: 19, fajr: '5:00 AM', dhuhr: '12:13 PM', asr: '4:25 PM', maghrib: '6:06 PM', isha: '7:27 PM', sehri: '5:00 AM', iftar: '6:06 PM' },
            { day: 20, date: 'Mar 10', ramadanDay: 20, fajr: '4:59 AM', dhuhr: '12:13 PM', asr: '4:26 PM', maghrib: '6:07 PM', isha: '7:28 PM', sehri: '4:59 AM', iftar: '6:07 PM' },
            { day: 21, date: 'Mar 11', ramadanDay: 21, fajr: '4:57 AM', dhuhr: '12:13 PM', asr: '4:26 PM', maghrib: '6:08 PM', isha: '7:28 PM', sehri: '4:57 AM', iftar: '6:08 PM' },
            { day: 22, date: 'Mar 12', ramadanDay: 22, fajr: '4:56 AM', dhuhr: '12:12 PM', asr: '4:27 PM', maghrib: '6:08 PM', isha: '7:29 PM', sehri: '4:56 AM', iftar: '6:08 PM' },
            { day: 23, date: 'Mar 13', ramadanDay: 23, fajr: '4:55 AM', dhuhr: '12:12 PM', asr: '4:27 PM', maghrib: '6:09 PM', isha: '7:30 PM', sehri: '4:55 AM', iftar: '6:09 PM' },
            { day: 24, date: 'Mar 14', ramadanDay: 24, fajr: '4:53 AM', dhuhr: '12:12 PM', asr: '4:28 PM', maghrib: '6:10 PM', isha: '7:30 PM', sehri: '4:53 AM', iftar: '6:10 PM' },
            { day: 25, date: 'Mar 15', ramadanDay: 25, fajr: '4:52 AM', dhuhr: '12:11 PM', asr: '4:29 PM', maghrib: '6:10 PM', isha: '7:31 PM', sehri: '4:52 AM', iftar: '6:10 PM' },
            { day: 26, date: 'Mar 16', ramadanDay: 26, fajr: '4:51 AM', dhuhr: '12:11 PM', asr: '4:29 PM', maghrib: '6:11 PM', isha: '7:32 PM', sehri: '4:51 AM', iftar: '6:11 PM' },
            { day: 27, date: 'Mar 17', ramadanDay: 27, fajr: '4:49 AM', dhuhr: '12:11 PM', asr: '4:30 PM', maghrib: '6:12 PM', isha: '7:33 PM', sehri: '4:49 AM', iftar: '6:12 PM' },
            { day: 28, date: 'Mar 18', ramadanDay: 28, fajr: '4:48 AM', dhuhr: '12:10 PM', asr: '4:31 PM', maghrib: '6:13 PM', isha: '7:33 PM', sehri: '4:48 AM', iftar: '6:13 PM' },
            { day: 29, date: 'Mar 19', ramadanDay: 29, fajr: '4:47 AM', dhuhr: '12:10 PM', asr: '4:31 PM', maghrib: '6:13 PM', isha: '7:34 PM', sehri: '4:47 AM', iftar: '6:13 PM' },
            { day: 30, date: 'Mar 20', ramadanDay: 30, fajr: '4:45 AM', dhuhr: '12:10 PM', asr: '4:32 PM', maghrib: '6:14 PM', isha: '7:35 PM', sehri: '4:45 AM', iftar: '6:14 PM' }
        ]
    },
    islamabad: {
        name: 'Islamabad',
        times: [
            { day: 1, date: 'Feb 19', ramadanDay: 1, fajr: '5:25 AM', dhuhr: '12:22 PM', asr: '4:16 PM', maghrib: '5:55 PM', isha: '7:19 PM', sehri: '5:25 AM', iftar: '5:55 PM' },
            { day: 2, date: 'Feb 20', ramadanDay: 2, fajr: '5:24 AM', dhuhr: '12:22 PM', asr: '4:17 PM', maghrib: '5:56 PM', isha: '7:20 PM', sehri: '5:24 AM', iftar: '5:56 PM' },
            { day: 3, date: 'Feb 21', ramadanDay: 3, fajr: '5:23 AM', dhuhr: '12:22 PM', asr: '4:17 PM', maghrib: '5:57 PM', isha: '7:20 PM', sehri: '5:23 AM', iftar: '5:57 PM' },
            { day: 4, date: 'Feb 22', ramadanDay: 4, fajr: '5:22 AM', dhuhr: '12:22 PM', asr: '4:18 PM', maghrib: '5:57 PM', isha: '7:21 PM', sehri: '5:22 AM', iftar: '5:57 PM' },
            { day: 5, date: 'Feb 23', ramadanDay: 5, fajr: '5:21 AM', dhuhr: '12:22 PM', asr: '4:18 PM', maghrib: '5:58 PM', isha: '7:22 PM', sehri: '5:21 AM', iftar: '5:58 PM' },
            { day: 6, date: 'Feb 24', ramadanDay: 6, fajr: '5:20 AM', dhuhr: '12:21 PM', asr: '4:19 PM', maghrib: '5:59 PM', isha: '7:22 PM', sehri: '5:20 AM', iftar: '5:59 PM' },
            { day: 7, date: 'Feb 25', ramadanDay: 7, fajr: '5:19 AM', dhuhr: '12:21 PM', asr: '4:20 PM', maghrib: '6:00 PM', isha: '7:23 PM', sehri: '5:19 AM', iftar: '6:00 PM' },
            { day: 8, date: 'Feb 26', ramadanDay: 8, fajr: '5:18 AM', dhuhr: '12:21 PM', asr: '4:20 PM', maghrib: '6:00 PM', isha: '7:24 PM', sehri: '5:18 AM', iftar: '6:00 PM' },
            { day: 9, date: 'Feb 27', ramadanDay: 9, fajr: '5:17 AM', dhuhr: '12:21 PM', asr: '4:21 PM', maghrib: '6:01 PM', isha: '7:24 PM', sehri: '5:17 AM', iftar: '6:01 PM' },
            { day: 10, date: 'Feb 28', ramadanDay: 10, fajr: '5:16 AM', dhuhr: '12:21 PM', asr: '4:21 PM', maghrib: '6:02 PM', isha: '7:25 PM', sehri: '5:16 AM', iftar: '6:02 PM' },
            { day: 11, date: 'Mar 01', ramadanDay: 11, fajr: '5:15 AM', dhuhr: '12:21 PM', asr: '4:22 PM', maghrib: '6:02 PM', isha: '7:25 PM', sehri: '5:15 AM', iftar: '6:02 PM' },
            { day: 12, date: 'Mar 02', ramadanDay: 12, fajr: '5:14 AM', dhuhr: '12:20 PM', asr: '4:23 PM', maghrib: '6:03 PM', isha: '7:26 PM', sehri: '5:14 AM', iftar: '6:03 PM' },
            { day: 13, date: 'Mar 03', ramadanDay: 13, fajr: '5:13 AM', dhuhr: '12:20 PM', asr: '4:23 PM', maghrib: '6:04 PM', isha: '7:27 PM', sehri: '5:13 AM', iftar: '6:04 PM' },
            { day: 14, date: 'Mar 04', ramadanDay: 14, fajr: '5:12 AM', dhuhr: '12:20 PM', asr: '4:24 PM', maghrib: '6:04 PM', isha: '7:27 PM', sehri: '5:12 AM', iftar: '6:04 PM' },
            { day: 15, date: 'Mar 05', ramadanDay: 15, fajr: '5:11 AM', dhuhr: '12:20 PM', asr: '4:24 PM', maghrib: '6:05 PM', isha: '7:28 PM', sehri: '5:11 AM', iftar: '6:05 PM' },
            { day: 16, date: 'Mar 06', ramadanDay: 16, fajr: '5:10 AM', dhuhr: '12:19 PM', asr: '4:25 PM', maghrib: '6:06 PM', isha: '7:29 PM', sehri: '5:10 AM', iftar: '6:06 PM' },
            { day: 17, date: 'Mar 07', ramadanDay: 17, fajr: '5:09 AM', dhuhr: '12:19 PM', asr: '4:25 PM', maghrib: '6:06 PM', isha: '7:29 PM', sehri: '5:09 AM', iftar: '6:06 PM' },
            { day: 18, date: 'Mar 08', ramadanDay: 18, fajr: '5:08 AM', dhuhr: '12:19 PM', asr: '4:26 PM', maghrib: '6:07 PM', isha: '7:30 PM', sehri: '5:08 AM', iftar: '6:07 PM' },
            { day: 19, date: 'Mar 09', ramadanDay: 19, fajr: '5:07 AM', dhuhr: '12:19 PM', asr: '4:26 PM', maghrib: '6:08 PM', isha: '7:31 PM', sehri: '5:07 AM', iftar: '6:08 PM' },
            { day: 20, date: 'Mar 10', ramadanDay: 20, fajr: '5:06 AM', dhuhr: '12:19 PM', asr: '4:27 PM', maghrib: '6:08 PM', isha: '7:31 PM', sehri: '5:06 AM', iftar: '6:08 PM' },
            { day: 21, date: 'Mar 11', ramadanDay: 21, fajr: '5:05 AM', dhuhr: '12:18 PM', asr: '4:28 PM', maghrib: '6:09 PM', isha: '7:32 PM', sehri: '5:05 AM', iftar: '6:09 PM' },
            { day: 22, date: 'Mar 12', ramadanDay: 22, fajr: '5:04 AM', dhuhr: '12:18 PM', asr: '4:28 PM', maghrib: '6:09 PM', isha: '7:33 PM', sehri: '5:04 AM', iftar: '6:09 PM' },
            { day: 23, date: 'Mar 13', ramadanDay: 23, fajr: '5:03 AM', dhuhr: '12:18 PM', asr: '4:29 PM', maghrib: '6:10 PM', isha: '7:33 PM', sehri: '5:03 AM', iftar: '6:10 PM' },
            { day: 24, date: 'Mar 14', ramadanDay: 24, fajr: '5:01 AM', dhuhr: '12:18 PM', asr: '4:29 PM', maghrib: '6:11 PM', isha: '7:34 PM', sehri: '5:01 AM', iftar: '6:11 PM' },
            { day: 25, date: 'Mar 15', ramadanDay: 25, fajr: '4:59 AM', dhuhr: '12:17 PM', asr: '4:30 PM', maghrib: '6:11 PM', isha: '7:35 PM', sehri: '4:59 AM', iftar: '6:11 PM' },
            { day: 26, date: 'Mar 16', ramadanDay: 26, fajr: '4:58 AM', dhuhr: '12:17 PM', asr: '4:31 PM', maghrib: '6:12 PM', isha: '7:35 PM', sehri: '4:58 AM', iftar: '6:12 PM' },
            { day: 27, date: 'Mar 17', ramadanDay: 27, fajr: '4:57 AM', dhuhr: '12:17 PM', asr: '4:31 PM', maghrib: '6:13 PM', isha: '7:36 PM', sehri: '4:57 AM', iftar: '6:13 PM' },
            { day: 28, date: 'Mar 18', ramadanDay: 28, fajr: '4:56 AM', dhuhr: '12:16 PM', asr: '4:32 PM', maghrib: '6:13 PM', isha: '7:37 PM', sehri: '4:56 AM', iftar: '6:13 PM' },
            { day: 29, date: 'Mar 19', ramadanDay: 29, fajr: '4:55 AM', dhuhr: '12:16 PM', asr: '4:32 PM', maghrib: '6:14 PM', isha: '7:37 PM', sehri: '4:55 AM', iftar: '6:14 PM' },
            { day: 30, date: 'Mar 20', ramadanDay: 30, fajr: '4:54 AM', dhuhr: '12:16 PM', asr: '4:33 PM', maghrib: '6:15 PM', isha: '7:38 PM', sehri: '4:54 AM', iftar: '6:15 PM' }
        ]
    },
    faisalabad: {
        name: 'Faisalabad',
        times: [
            { day: 1, date: 'Feb 19', ramadanDay: 1, fajr: '5:24 AM', dhuhr: '12:21 PM', asr: '4:19 PM', maghrib: '5:58 PM', isha: '7:19 PM', sehri: '5:24 AM', iftar: '5:58 PM' },
            { day: 2, date: 'Feb 20', ramadanDay: 2, fajr: '5:23 AM', dhuhr: '12:21 PM', asr: '4:19 PM', maghrib: '5:59 PM', isha: '7:20 PM', sehri: '5:23 AM', iftar: '5:59 PM' },
            { day: 3, date: 'Feb 21', ramadanDay: 3, fajr: '5:22 AM', dhuhr: '12:21 PM', asr: '4:20 PM', maghrib: '5:59 PM', isha: '7:20 PM', sehri: '5:22 AM', iftar: '5:59 PM' },
            { day: 4, date: 'Feb 22', ramadanDay: 4, fajr: '5:21 AM', dhuhr: '12:21 PM', asr: '4:20 PM', maghrib: '6:00 PM', isha: '7:21 PM', sehri: '5:21 AM', iftar: '6:00 PM' },
            { day: 5, date: 'Feb 23', ramadanDay: 5, fajr: '5:20 AM', dhuhr: '12:21 PM', asr: '4:21 PM', maghrib: '6:01 PM', isha: '7:22 PM', sehri: '5:20 AM', iftar: '6:01 PM' },
            { day: 6, date: 'Feb 24', ramadanDay: 6, fajr: '5:19 AM', dhuhr: '12:20 PM', asr: '4:21 PM', maghrib: '6:01 PM', isha: '7:22 PM', sehri: '5:19 AM', iftar: '6:01 PM' },
            { day: 7, date: 'Feb 25', ramadanDay: 7, fajr: '5:18 AM', dhuhr: '12:20 PM', asr: '4:22 PM', maghrib: '6:02 PM', isha: '7:23 PM', sehri: '5:18 AM', iftar: '6:02 PM' },
            { day: 8, date: 'Feb 26', ramadanDay: 8, fajr: '5:17 AM', dhuhr: '12:20 PM', asr: '4:22 PM', maghrib: '6:03 PM', isha: '7:24 PM', sehri: '5:17 AM', iftar: '6:03 PM' },
            { day: 9, date: 'Feb 27', ramadanDay: 9, fajr: '5:16 AM', dhuhr: '12:20 PM', asr: '4:23 PM', maghrib: '6:03 PM', isha: '7:24 PM', sehri: '5:16 AM', iftar: '6:03 PM' },
            { day: 10, date: 'Feb 28', ramadanDay: 10, fajr: '5:15 AM', dhuhr: '12:20 PM', asr: '4:23 PM', maghrib: '6:04 PM', isha: '7:25 PM', sehri: '5:15 AM', iftar: '6:04 PM' },
            { day: 11, date: 'Mar 01', ramadanDay: 11, fajr: '5:14 AM', dhuhr: '12:20 PM', asr: '4:24 PM', maghrib: '6:04 PM', isha: '7:25 PM', sehri: '5:14 AM', iftar: '6:04 PM' },
            { day: 12, date: 'Mar 02', ramadanDay: 12, fajr: '5:13 AM', dhuhr: '12:19 PM', asr: '4:24 PM', maghrib: '6:05 PM', isha: '7:26 PM', sehri: '5:13 AM', iftar: '6:05 PM' },
            { day: 13, date: 'Mar 03', ramadanDay: 13, fajr: '5:12 AM', dhuhr: '12:19 PM', asr: '4:25 PM', maghrib: '6:06 PM', isha: '7:27 PM', sehri: '5:12 AM', iftar: '6:06 PM' },
            { day: 14, date: 'Mar 04', ramadanDay: 14, fajr: '5:11 AM', dhuhr: '12:19 PM', asr: '4:25 PM', maghrib: '6:06 PM', isha: '7:27 PM', sehri: '5:11 AM', iftar: '6:06 PM' },
            { day: 15, date: 'Mar 05', ramadanDay: 15, fajr: '5:10 AM', dhuhr: '12:19 PM', asr: '4:26 PM', maghrib: '6:07 PM', isha: '7:28 PM', sehri: '5:10 AM', iftar: '6:07 PM' },
            { day: 16, date: 'Mar 06', ramadanDay: 16, fajr: '5:09 AM', dhuhr: '12:18 PM', asr: '4:26 PM', maghrib: '6:08 PM', isha: '7:29 PM', sehri: '5:09 AM', iftar: '6:08 PM' },
            { day: 17, date: 'Mar 07', ramadanDay: 17, fajr: '5:08 AM', dhuhr: '12:18 PM', asr: '4:27 PM', maghrib: '6:08 PM', isha: '7:29 PM', sehri: '5:08 AM', iftar: '6:08 PM' },
            { day: 18, date: 'Mar 08', ramadanDay: 18, fajr: '5:07 AM', dhuhr: '12:18 PM', asr: '4:27 PM', maghrib: '6:09 PM', isha: '7:30 PM', sehri: '5:07 AM', iftar: '6:09 PM' },
            { day: 19, date: 'Mar 09', ramadanDay: 19, fajr: '5:06 AM', dhuhr: '12:18 PM', asr: '4:28 PM', maghrib: '6:10 PM', isha: '7:31 PM', sehri: '5:06 AM', iftar: '6:10 PM' },
            { day: 20, date: 'Mar 10', ramadanDay: 20, fajr: '5:05 AM', dhuhr: '12:17 PM', asr: '4:28 PM', maghrib: '6:10 PM', isha: '7:31 PM', sehri: '5:05 AM', iftar: '6:10 PM' },
            { day: 21, date: 'Mar 11', ramadanDay: 21, fajr: '5:04 AM', dhuhr: '12:17 PM', asr: '4:29 PM', maghrib: '6:11 PM', isha: '7:32 PM', sehri: '5:04 AM', iftar: '6:11 PM' },
            { day: 22, date: 'Mar 12', ramadanDay: 22, fajr: '5:03 AM', dhuhr: '12:17 PM', asr: '4:29 PM', maghrib: '6:11 PM', isha: '7:33 PM', sehri: '5:03 AM', iftar: '6:11 PM' },
            { day: 23, date: 'Mar 13', ramadanDay: 23, fajr: '5:02 AM', dhuhr: '12:17 PM', asr: '4:30 PM', maghrib: '6:12 PM', isha: '7:33 PM', sehri: '5:02 AM', iftar: '6:12 PM' },
            { day: 24, date: 'Mar 14', ramadanDay: 24, fajr: '5:00 AM', dhuhr: '12:16 PM', asr: '4:30 PM', maghrib: '6:13 PM', isha: '7:34 PM', sehri: '5:00 AM', iftar: '6:13 PM' },
            { day: 25, date: 'Mar 15', ramadanDay: 25, fajr: '4:59 AM', dhuhr: '12:16 PM', asr: '4:31 PM', maghrib: '6:13 PM', isha: '7:35 PM', sehri: '4:59 AM', iftar: '6:13 PM' },
            { day: 26, date: 'Mar 16', ramadanDay: 26, fajr: '4:58 AM', dhuhr: '12:16 PM', asr: '4:31 PM', maghrib: '6:14 PM', isha: '7:35 PM', sehri: '4:58 AM', iftar: '6:14 PM' },
            { day: 27, date: 'Mar 17', ramadanDay: 27, fajr: '4:57 AM', dhuhr: '12:15 PM', asr: '4:32 PM', maghrib: '6:15 PM', isha: '7:36 PM', sehri: '4:57 AM', iftar: '6:15 PM' },
            { day: 28, date: 'Mar 18', ramadanDay: 28, fajr: '4:56 AM', dhuhr: '12:15 PM', asr: '4:33 PM', maghrib: '6:15 PM', isha: '7:37 PM', sehri: '4:56 AM', iftar: '6:15 PM' },
            { day: 29, date: 'Mar 19', ramadanDay: 29, fajr: '4:55 AM', dhuhr: '12:15 PM', asr: '4:33 PM', maghrib: '6:16 PM', isha: '7:37 PM', sehri: '4:55 AM', iftar: '6:16 PM' },
            { day: 30, date: 'Mar 20', ramadanDay: 30, fajr: '4:54 AM', dhuhr: '12:14 PM', asr: '4:34 PM', maghrib: '6:17 PM', isha: '7:38 PM', sehri: '4:54 AM', iftar: '6:17 PM' }
        ]
    },
    rawalpindi: {
        name: 'Rawalpindi',
        times: [
            { day: 1, date: 'Feb 19', ramadanDay: 1, fajr: '5:24 AM', dhuhr: '12:22 PM', asr: '4:16 PM', maghrib: '5:56 PM', isha: '7:19 PM', sehri: '5:24 AM', iftar: '5:56 PM' },
            { day: 2, date: 'Feb 20', ramadanDay: 2, fajr: '5:23 AM', dhuhr: '12:22 PM', asr: '4:17 PM', maghrib: '5:56 PM', isha: '7:20 PM', sehri: '5:23 AM', iftar: '5:56 PM' },
            { day: 3, date: 'Feb 21', ramadanDay: 3, fajr: '5:22 AM', dhuhr: '12:22 PM', asr: '4:17 PM', maghrib: '5:57 PM', isha: '7:20 PM', sehri: '5:22 AM', iftar: '5:57 PM' },
            { day: 4, date: 'Feb 22', ramadanDay: 4, fajr: '5:21 AM', dhuhr: '12:22 PM', asr: '4:18 PM', maghrib: '5:58 PM', isha: '7:21 PM', sehri: '5:21 AM', iftar: '5:58 PM' },
            { day: 5, date: 'Feb 23', ramadanDay: 5, fajr: '5:20 AM', dhuhr: '12:22 PM', asr: '4:18 PM', maghrib: '5:58 PM', isha: '7:22 PM', sehri: '5:20 AM', iftar: '5:58 PM' },
            { day: 6, date: 'Feb 24', ramadanDay: 6, fajr: '5:19 AM', dhuhr: '12:21 PM', asr: '4:19 PM', maghrib: '5:59 PM', isha: '7:22 PM', sehri: '5:19 AM', iftar: '5:59 PM' },
            { day: 7, date: 'Feb 25', ramadanDay: 7, fajr: '5:18 AM', dhuhr: '12:21 PM', asr: '4:20 PM', maghrib: '6:00 PM', isha: '7:23 PM', sehri: '5:18 AM', iftar: '6:00 PM' },
            { day: 8, date: 'Feb 26', ramadanDay: 8, fajr: '5:17 AM', dhuhr: '12:21 PM', asr: '4:20 PM', maghrib: '6:00 PM', isha: '7:24 PM', sehri: '5:17 AM', iftar: '6:00 PM' },
            { day: 9, date: 'Feb 27', ramadanDay: 9, fajr: '5:16 AM', dhuhr: '12:21 PM', asr: '4:21 PM', maghrib: '6:01 PM', isha: '7:24 PM', sehri: '5:16 AM', iftar: '6:01 PM' },
            { day: 10, date: 'Feb 28', ramadanDay: 10, fajr: '5:15 AM', dhuhr: '12:21 PM', asr: '4:21 PM', maghrib: '6:02 PM', isha: '7:25 PM', sehri: '5:15 AM', iftar: '6:02 PM' },
            { day: 11, date: 'Mar 01', ramadanDay: 11, fajr: '5:14 AM', dhuhr: '12:21 PM', asr: '4:22 PM', maghrib: '6:02 PM', isha: '7:25 PM', sehri: '5:14 AM', iftar: '6:02 PM' },
            { day: 12, date: 'Mar 02', ramadanDay: 12, fajr: '5:13 AM', dhuhr: '12:20 PM', asr: '4:23 PM', maghrib: '6:03 PM', isha: '7:26 PM', sehri: '5:13 AM', iftar: '6:03 PM' },
            { day: 13, date: 'Mar 03', ramadanDay: 13, fajr: '5:12 AM', dhuhr: '12:20 PM', asr: '4:23 PM', maghrib: '6:04 PM', isha: '7:27 PM', sehri: '5:12 AM', iftar: '6:04 PM' },
            { day: 14, date: 'Mar 04', ramadanDay: 14, fajr: '5:11 AM', dhuhr: '12:20 PM', asr: '4:24 PM', maghrib: '6:04 PM', isha: '7:27 PM', sehri: '5:11 AM', iftar: '6:04 PM' },
            { day: 15, date: 'Mar 05', ramadanDay: 15, fajr: '5:10 AM', dhuhr: '12:20 PM', asr: '4:24 PM', maghrib: '6:05 PM', isha: '7:28 PM', sehri: '5:10 AM', iftar: '6:05 PM' },
            { day: 16, date: 'Mar 06', ramadanDay: 16, fajr: '5:09 AM', dhuhr: '12:19 PM', asr: '4:25 PM', maghrib: '6:06 PM', isha: '7:29 PM', sehri: '5:09 AM', iftar: '6:06 PM' },
            { day: 17, date: 'Mar 07', ramadanDay: 17, fajr: '5:08 AM', dhuhr: '12:19 PM', asr: '4:25 PM', maghrib: '6:06 PM', isha: '7:29 PM', sehri: '5:08 AM', iftar: '6:06 PM' },
            { day: 18, date: 'Mar 08', ramadanDay: 18, fajr: '5:07 AM', dhuhr: '12:19 PM', asr: '4:26 PM', maghrib: '6:07 PM', isha: '7:30 PM', sehri: '5:07 AM', iftar: '6:07 PM' },
            { day: 19, date: 'Mar 09', ramadanDay: 19, fajr: '5:06 AM', dhuhr: '12:19 PM', asr: '4:26 PM', maghrib: '6:08 PM', isha: '7:31 PM', sehri: '5:06 AM', iftar: '6:08 PM' },
            { day: 20, date: 'Mar 10', ramadanDay: 20, fajr: '5:05 AM', dhuhr: '12:19 PM', asr: '4:27 PM', maghrib: '6:08 PM', isha: '7:31 PM', sehri: '5:05 AM', iftar: '6:08 PM' },
            { day: 21, date: 'Mar 11', ramadanDay: 21, fajr: '5:04 AM', dhuhr: '12:18 PM', asr: '4:28 PM', maghrib: '6:09 PM', isha: '7:32 PM', sehri: '5:04 AM', iftar: '6:09 PM' },
            { day: 22, date: 'Mar 12', ramadanDay: 22, fajr: '5:03 AM', dhuhr: '12:18 PM', asr: '4:28 PM', maghrib: '6:09 PM', isha: '7:33 PM', sehri: '5:03 AM', iftar: '6:09 PM' },
            { day: 23, date: 'Mar 13', ramadanDay: 23, fajr: '5:02 AM', dhuhr: '12:18 PM', asr: '4:29 PM', maghrib: '6:10 PM', isha: '7:33 PM', sehri: '5:02 AM', iftar: '6:10 PM' },
            { day: 24, date: 'Mar 14', ramadanDay: 24, fajr: '5:00 AM', dhuhr: '12:18 PM', asr: '4:29 PM', maghrib: '6:11 PM', isha: '7:34 PM', sehri: '5:00 AM', iftar: '6:11 PM' },
            { day: 25, date: 'Mar 15', ramadanDay: 25, fajr: '4:59 AM', dhuhr: '12:17 PM', asr: '4:30 PM', maghrib: '6:11 PM', isha: '7:35 PM', sehri: '4:59 AM', iftar: '6:11 PM' },
            { day: 26, date: 'Mar 16', ramadanDay: 26, fajr: '4:58 AM', dhuhr: '12:17 PM', asr: '4:31 PM', maghrib: '6:12 PM', isha: '7:35 PM', sehri: '4:58 AM', iftar: '6:12 PM' },
            { day: 27, date: 'Mar 17', ramadanDay: 27, fajr: '4:57 AM', dhuhr: '12:17 PM', asr: '4:31 PM', maghrib: '6:13 PM', isha: '7:36 PM', sehri: '4:57 AM', iftar: '6:13 PM' },
            { day: 28, date: 'Mar 18', ramadanDay: 28, fajr: '4:56 AM', dhuhr: '12:16 PM', asr: '4:32 PM', maghrib: '6:13 PM', isha: '7:37 PM', sehri: '4:56 AM', iftar: '6:13 PM' },
            { day: 29, date: 'Mar 19', ramadanDay: 29, fajr: '4:55 AM', dhuhr: '12:16 PM', asr: '4:32 PM', maghrib: '6:14 PM', isha: '7:37 PM', sehri: '4:55 AM', iftar: '6:14 PM' },
            { day: 30, date: 'Mar 20', ramadanDay: 30, fajr: '4:54 AM', dhuhr: '12:16 PM', asr: '4:33 PM', maghrib: '6:15 PM', isha: '7:38 PM', sehri: '4:54 AM', iftar: '6:15 PM' }
        ]
    },
    multan: {
        name: 'Multan',
        times: [
            { day: 1, date: 'Feb 19', ramadanDay: 1, fajr: '5:30 AM', dhuhr: '12:23 PM', asr: '4:19 PM', maghrib: '5:58 PM', isha: '7:18 PM', sehri: '5:30 AM', iftar: '5:58 PM' },
            { day: 2, date: 'Feb 20', ramadanDay: 2, fajr: '5:29 AM', dhuhr: '12:23 PM', asr: '4:19 PM', maghrib: '5:59 PM', isha: '7:19 PM', sehri: '5:29 AM', iftar: '5:59 PM' },
            { day: 3, date: 'Feb 21', ramadanDay: 3, fajr: '5:28 AM', dhuhr: '12:23 PM', asr: '4:20 PM', maghrib: '6:00 PM', isha: '7:19 PM', sehri: '5:28 AM', iftar: '6:00 PM' },
            { day: 4, date: 'Feb 22', ramadanDay: 4, fajr: '5:27 AM', dhuhr: '12:22 PM', asr: '4:20 PM', maghrib: '6:00 PM', isha: '7:20 PM', sehri: '5:27 AM', iftar: '6:00 PM' },
            { day: 5, date: 'Feb 23', ramadanDay: 5, fajr: '5:26 AM', dhuhr: '12:22 PM', asr: '4:21 PM', maghrib: '6:01 PM', isha: '7:21 PM', sehri: '5:26 AM', iftar: '6:01 PM' },
            { day: 6, date: 'Feb 24', ramadanDay: 6, fajr: '5:25 AM', dhuhr: '12:22 PM', asr: '4:21 PM', maghrib: '6:02 PM', isha: '7:21 PM', sehri: '5:25 AM', iftar: '6:02 PM' },
            { day: 7, date: 'Feb 25', ramadanDay: 7, fajr: '5:24 AM', dhuhr: '12:22 PM', asr: '4:22 PM', maghrib: '6:02 PM', isha: '7:22 PM', sehri: '5:24 AM', iftar: '6:02 PM' },
            { day: 8, date: 'Feb 26', ramadanDay: 8, fajr: '5:23 AM', dhuhr: '12:22 PM', asr: '4:22 PM', maghrib: '6:03 PM', isha: '7:23 PM', sehri: '5:23 AM', iftar: '6:03 PM' },
            { day: 9, date: 'Feb 27', ramadanDay: 9, fajr: '5:22 AM', dhuhr: '12:22 PM', asr: '4:23 PM', maghrib: '6:03 PM', isha: '7:23 PM', sehri: '5:22 AM', iftar: '6:03 PM' },
            { day: 10, date: 'Feb 28', ramadanDay: 10, fajr: '5:21 AM', dhuhr: '12:22 PM', asr: '4:23 PM', maghrib: '6:04 PM', isha: '7:24 PM', sehri: '5:21 AM', iftar: '6:04 PM' },
            { day: 11, date: 'Mar 01', ramadanDay: 11, fajr: '5:20 AM', dhuhr: '12:21 PM', asr: '4:24 PM', maghrib: '6:05 PM', isha: '7:25 PM', sehri: '5:20 AM', iftar: '6:05 PM' },
            { day: 12, date: 'Mar 02', ramadanDay: 12, fajr: '5:19 AM', dhuhr: '12:21 PM', asr: '4:24 PM', maghrib: '6:05 PM', isha: '7:25 PM', sehri: '5:19 AM', iftar: '6:05 PM' },
            { day: 13, date: 'Mar 03', ramadanDay: 13, fajr: '5:18 AM', dhuhr: '12:21 PM', asr: '4:25 PM', maghrib: '6:06 PM', isha: '7:26 PM', sehri: '5:18 AM', iftar: '6:06 PM' },
            { day: 14, date: 'Mar 04', ramadanDay: 14, fajr: '5:17 AM', dhuhr: '12:21 PM', asr: '4:25 PM', maghrib: '6:07 PM', isha: '7:27 PM', sehri: '5:17 AM', iftar: '6:07 PM' },
            { day: 15, date: 'Mar 05', ramadanDay: 15, fajr: '5:16 AM', dhuhr: '12:20 PM', asr: '4:26 PM', maghrib: '6:07 PM', isha: '7:27 PM', sehri: '5:16 AM', iftar: '6:07 PM' },
            { day: 16, date: 'Mar 06', ramadanDay: 16, fajr: '5:15 AM', dhuhr: '12:20 PM', asr: '4:26 PM', maghrib: '6:08 PM', isha: '7:28 PM', sehri: '5:15 AM', iftar: '6:08 PM' },
            { day: 17, date: 'Mar 07', ramadanDay: 17, fajr: '5:14 AM', dhuhr: '12:20 PM', asr: '4:27 PM', maghrib: '6:09 PM', isha: '7:29 PM', sehri: '5:14 AM', iftar: '6:09 PM' },
            { day: 18, date: 'Mar 08', ramadanDay: 18, fajr: '5:13 AM', dhuhr: '12:20 PM', asr: '4:27 PM', maghrib: '6:09 PM', isha: '7:29 PM', sehri: '5:13 AM', iftar: '6:09 PM' },
            { day: 19, date: 'Mar 09', ramadanDay: 19, fajr: '5:12 AM', dhuhr: '12:20 PM', asr: '4:28 PM', maghrib: '6:10 PM', isha: '7:30 PM', sehri: '5:12 AM', iftar: '6:10 PM' },
            { day: 20, date: 'Mar 10', ramadanDay: 20, fajr: '5:11 AM', dhuhr: '12:19 PM', asr: '4:28 PM', maghrib: '6:10 PM', isha: '7:30 PM', sehri: '5:11 AM', iftar: '6:10 PM' },
            { day: 21, date: 'Mar 11', ramadanDay: 21, fajr: '5:10 AM', dhuhr: '12:19 PM', asr: '4:29 PM', maghrib: '6:11 PM', isha: '7:31 PM', sehri: '5:10 AM', iftar: '6:11 PM' },
            { day: 22, date: 'Mar 12', ramadanDay: 22, fajr: '5:09 AM', dhuhr: '12:19 PM', asr: '4:29 PM', maghrib: '6:12 PM', isha: '7:32 PM', sehri: '5:09 AM', iftar: '6:12 PM' },
            { day: 23, date: 'Mar 13', ramadanDay: 23, fajr: '5:08 AM', dhuhr: '12:19 PM', asr: '4:30 PM', maghrib: '6:12 PM', isha: '7:32 PM', sehri: '5:08 AM', iftar: '6:12 PM' },
            { day: 24, date: 'Mar 14', ramadanDay: 24, fajr: '5:06 AM', dhuhr: '12:18 PM', asr: '4:30 PM', maghrib: '6:13 PM', isha: '7:33 PM', sehri: '5:06 AM', iftar: '6:13 PM' },
            { day: 25, date: 'Mar 15', ramadanDay: 25, fajr: '5:05 AM', dhuhr: '12:18 PM', asr: '4:31 PM', maghrib: '6:14 PM', isha: '7:34 PM', sehri: '5:05 AM', iftar: '6:14 PM' },
            { day: 26, date: 'Mar 16', ramadanDay: 26, fajr: '5:04 AM', dhuhr: '12:18 PM', asr: '4:31 PM', maghrib: '6:14 PM', isha: '7:34 PM', sehri: '5:04 AM', iftar: '6:14 PM' },
            { day: 27, date: 'Mar 17', ramadanDay: 27, fajr: '5:03 AM', dhuhr: '12:17 PM', asr: '4:32 PM', maghrib: '6:15 PM', isha: '7:35 PM', sehri: '5:03 AM', iftar: '6:15 PM' },
            { day: 28, date: 'Mar 18', ramadanDay: 28, fajr: '5:02 AM', dhuhr: '12:17 PM', asr: '4:32 PM', maghrib: '6:16 PM', isha: '7:36 PM', sehri: '5:02 AM', iftar: '6:16 PM' },
            { day: 29, date: 'Mar 19', ramadanDay: 29, fajr: '5:01 AM', dhuhr: '12:17 PM', asr: '4:33 PM', maghrib: '6:16 PM', isha: '7:36 PM', sehri: '5:01 AM', iftar: '6:16 PM' },
            { day: 30, date: 'Mar 20', ramadanDay: 30, fajr: '5:00 AM', dhuhr: '12:17 PM', asr: '4:34 PM', maghrib: '6:17 PM', isha: '7:37 PM', sehri: '5:00 AM', iftar: '6:17 PM' }
        ]
    },
    peshawar: {
        name: 'Peshawar',
        times: [
            { day: 1, date: 'Feb 19', ramadanDay: 1, fajr: '5:31 AM', dhuhr: '12:28 PM', asr: '4:22 PM', maghrib: '6:01 PM', isha: '7:25 PM', sehri: '5:31 AM', iftar: '6:01 PM' },
            { day: 2, date: 'Feb 20', ramadanDay: 2, fajr: '5:30 AM', dhuhr: '12:28 PM', asr: '4:23 PM', maghrib: '6:02 PM', isha: '7:25 PM', sehri: '5:30 AM', iftar: '6:02 PM' },
            { day: 3, date: 'Feb 21', ramadanDay: 3, fajr: '5:29 AM', dhuhr: '12:28 PM', asr: '4:23 PM', maghrib: '6:02 PM', isha: '7:26 PM', sehri: '5:29 AM', iftar: '6:02 PM' },
            { day: 4, date: 'Feb 22', ramadanDay: 4, fajr: '5:28 AM', dhuhr: '12:28 PM', asr: '4:24 PM', maghrib: '6:03 PM', isha: '7:27 PM', sehri: '5:28 AM', iftar: '6:03 PM' },
            { day: 5, date: 'Feb 23', ramadanDay: 5, fajr: '5:27 AM', dhuhr: '12:28 PM', asr: '4:24 PM', maghrib: '6:04 PM', isha: '7:27 PM', sehri: '5:27 AM', iftar: '6:04 PM' },
            { day: 6, date: 'Feb 24', ramadanDay: 6, fajr: '5:26 AM', dhuhr: '12:27 PM', asr: '4:25 PM', maghrib: '6:04 PM', isha: '7:28 PM', sehri: '5:26 AM', iftar: '6:04 PM' },
            { day: 7, date: 'Feb 25', ramadanDay: 7, fajr: '5:25 AM', dhuhr: '12:27 PM', asr: '4:25 PM', maghrib: '6:05 PM', isha: '7:29 PM', sehri: '5:25 AM', iftar: '6:05 PM' },
            { day: 8, date: 'Feb 26', ramadanDay: 8, fajr: '5:24 AM', dhuhr: '12:27 PM', asr: '4:26 PM', maghrib: '6:06 PM', isha: '7:29 PM', sehri: '5:24 AM', iftar: '6:06 PM' },
            { day: 9, date: 'Feb 27', ramadanDay: 9, fajr: '5:23 AM', dhuhr: '12:27 PM', asr: '4:26 PM', maghrib: '6:06 PM', isha: '7:30 PM', sehri: '5:23 AM', iftar: '6:06 PM' },
            { day: 10, date: 'Feb 28', ramadanDay: 10, fajr: '5:22 AM', dhuhr: '12:27 PM', asr: '4:27 PM', maghrib: '6:07 PM', isha: '7:31 PM', sehri: '5:22 AM', iftar: '6:07 PM' },
            { day: 11, date: 'Mar 01', ramadanDay: 11, fajr: '5:21 AM', dhuhr: '12:27 PM', asr: '4:27 PM', maghrib: '6:08 PM', isha: '7:31 PM', sehri: '5:21 AM', iftar: '6:08 PM' },
            { day: 12, date: 'Mar 02', ramadanDay: 12, fajr: '5:20 AM', dhuhr: '12:26 PM', asr: '4:28 PM', maghrib: '6:08 PM', isha: '7:32 PM', sehri: '5:20 AM', iftar: '6:08 PM' },
            { day: 13, date: 'Mar 03', ramadanDay: 13, fajr: '5:19 AM', dhuhr: '12:26 PM', asr: '4:28 PM', maghrib: '6:09 PM', isha: '7:33 PM', sehri: '5:19 AM', iftar: '6:09 PM' },
            { day: 14, date: 'Mar 04', ramadanDay: 14, fajr: '5:18 AM', dhuhr: '12:26 PM', asr: '4:29 PM', maghrib: '6:10 PM', isha: '7:33 PM', sehri: '5:18 AM', iftar: '6:10 PM' },
            { day: 15, date: 'Mar 05', ramadanDay: 15, fajr: '5:17 AM', dhuhr: '12:26 PM', asr: '4:29 PM', maghrib: '6:10 PM', isha: '7:34 PM', sehri: '5:17 AM', iftar: '6:10 PM' },
            { day: 16, date: 'Mar 06', ramadanDay: 16, fajr: '5:16 AM', dhuhr: '12:25 PM', asr: '4:30 PM', maghrib: '6:11 PM', isha: '7:35 PM', sehri: '5:16 AM', iftar: '6:11 PM' },
            { day: 17, date: 'Mar 07', ramadanDay: 17, fajr: '5:15 AM', dhuhr: '12:25 PM', asr: '4:30 PM', maghrib: '6:12 PM', isha: '7:35 PM', sehri: '5:15 AM', iftar: '6:12 PM' },
            { day: 18, date: 'Mar 08', ramadanDay: 18, fajr: '5:14 AM', dhuhr: '12:25 PM', asr: '4:31 PM', maghrib: '6:12 PM', isha: '7:36 PM', sehri: '5:14 AM', iftar: '6:12 PM' },
            { day: 19, date: 'Mar 09', ramadanDay: 19, fajr: '5:13 AM', dhuhr: '12:25 PM', asr: '4:31 PM', maghrib: '6:13 PM', isha: '7:37 PM', sehri: '5:13 AM', iftar: '6:13 PM' },
            { day: 20, date: 'Mar 10', ramadanDay: 20, fajr: '5:12 AM', dhuhr: '12:24 PM', asr: '4:32 PM', maghrib: '6:14 PM', isha: '7:37 PM', sehri: '5:12 AM', iftar: '6:14 PM' },
            { day: 21, date: 'Mar 11', ramadanDay: 21, fajr: '5:11 AM', dhuhr: '12:24 PM', asr: '4:32 PM', maghrib: '6:14 PM', isha: '7:38 PM', sehri: '5:11 AM', iftar: '6:14 PM' },
            { day: 22, date: 'Mar 12', ramadanDay: 22, fajr: '5:10 AM', dhuhr: '12:24 PM', asr: '4:33 PM', maghrib: '6:15 PM', isha: '7:39 PM', sehri: '5:10 AM', iftar: '6:15 PM' },
            { day: 23, date: 'Mar 13', ramadanDay: 23, fajr: '5:09 AM', dhuhr: '12:24 PM', asr: '4:33 PM', maghrib: '6:16 PM', isha: '7:39 PM', sehri: '5:09 AM', iftar: '6:16 PM' },
            { day: 24, date: 'Mar 14', ramadanDay: 24, fajr: '5:07 AM', dhuhr: '12:23 PM', asr: '4:34 PM', maghrib: '6:16 PM', isha: '7:40 PM', sehri: '5:07 AM', iftar: '6:16 PM' },
            { day: 25, date: 'Mar 15', ramadanDay: 25, fajr: '5:06 AM', dhuhr: '12:23 PM', asr: '4:34 PM', maghrib: '6:17 PM', isha: '7:41 PM', sehri: '5:06 AM', iftar: '6:17 PM' },
            { day: 26, date: 'Mar 16', ramadanDay: 26, fajr: '5:05 AM', dhuhr: '12:23 PM', asr: '4:35 PM', maghrib: '6:18 PM', isha: '7:41 PM', sehri: '5:05 AM', iftar: '6:18 PM' },
            { day: 27, date: 'Mar 17', ramadanDay: 27, fajr: '5:04 AM', dhuhr: '12:22 PM', asr: '4:35 PM', maghrib: '6:18 PM', isha: '7:42 PM', sehri: '5:04 AM', iftar: '6:18 PM' },
            { day: 28, date: 'Mar 18', ramadanDay: 28, fajr: '5:03 AM', dhuhr: '12:22 PM', asr: '4:36 PM', maghrib: '6:19 PM', isha: '7:43 PM', sehri: '5:03 AM', iftar: '6:19 PM' },
            { day: 29, date: 'Mar 19', ramadanDay: 29, fajr: '5:02 AM', dhuhr: '12:22 PM', asr: '4:36 PM', maghrib: '6:20 PM', isha: '7:43 PM', sehri: '5:02 AM', iftar: '6:20 PM' },
            { day: 30, date: 'Mar 20', ramadanDay: 30, fajr: '5:01 AM', dhuhr: '12:21 PM', asr: '4:37 PM', maghrib: '6:20 PM', isha: '7:44 PM', sehri: '5:01 AM', iftar: '6:20 PM' }
        ]
    },
    quetta: {
        name: 'Quetta',
        times: []
    },
    hyderabad: {
        name: 'Hyderabad',
        times: []
    },
    sialkot: {
        name: 'Sialkot',
        times: []
    }
};

// Populate remaining cities (will be updated with API data)
prayerTimes.quetta.times = prayerTimes.karachi.times.map(t => ({ ...t }));
prayerTimes.hyderabad.times = prayerTimes.karachi.times.map(t => ({ ...t }));
prayerTimes.sialkot.times = prayerTimes.lahore.times.map(t => ({ ...t }));

// ============================================
// Fetch Prayer Times from AlAdhan API
// ============================================
async function fetchPrayerTimesFromAlAdhan(cityName, country = 'Pakistan') {
    const cityMap = {
        'karachi': { name: 'Karachi', country: 'Pakistan' },
        'lahore': { name: 'Lahore', country: 'Pakistan' },
        'islamabad': { name: 'Islamabad', country: 'Pakistan' },
        'faisalabad': { name: 'Faisalabad', country: 'Pakistan' },
        'rawalpindi': { name: 'Rawalpindi', country: 'Pakistan' },
        'multan': { name: 'Multan', country: 'Pakistan' },
        'peshawar': { name: 'Peshawar', country: 'Pakistan' },
        'quetta': { name: 'Quetta', country: 'Pakistan' },
        'hyderabad': { name: 'Hyderabad', country: 'Pakistan' },
        'sialkot': { name: 'Sialkot', country: 'Pakistan' }
    };

    const cityInfo = cityMap[cityName];
    if (!cityInfo) return null;

    try {
        // Fetch data for February and March 2026
        const [febData, marData] = await Promise.all([
            fetch(`https://api.aladhan.com/v1/calendarByCity/2026/2?city=${encodeURIComponent(cityInfo.name)}&country=${encodeURIComponent(cityInfo.country)}&method=1`).then(r => r.json()),
            fetch(`https://api.aladhan.com/v1/calendarByCity/2026/3?city=${encodeURIComponent(cityInfo.name)}&country=${encodeURIComponent(cityInfo.country)}&method=1`).then(r => r.json())
        ]);

        const allDays = [...(febData.data || []), ...(marData.data || [])];
        
        // Filter for Ramadan days (Islamic month = 9)
        const ramadanDays = allDays.filter(day => {
            const hijriMonth = parseInt(day.date.hijri.month.number);
            return hijriMonth === 9; // Ramadan is the 9th month
        });

        if (ramadanDays.length === 0) return null;

        // Convert to our format
        const times = ramadanDays.map((day, index) => {
            const gregorian = day.date.gregorian;
            const timings = day.timings;
            
            // Parse time strings (format: "HH:MM (PKT)" or "HH:MM")
            const parseTime = (timeStr) => {
                const match = timeStr.match(/(\d{2}):(\d{2})/);
                if (match) {
                    return `${match[1]}:${match[2]}`;
                }
                return timeStr;
            };
            
            const fajrTime = parseTime(timings.Fajr);
            const dhuhrTime = parseTime(timings.Dhuhr);
            const asrTime = parseTime(timings.Asr);
            const maghribTime = parseTime(timings.Maghrib);
            const ishaTime = parseTime(timings.Isha);
            
            // Format date string
            const monthNum = gregorian.month.number.toString().padStart(2, '0');
            const dayNum = gregorian.day.toString().padStart(2, '0');
            const dateStr = `${gregorian.year}-${monthNum}-${dayNum}`;
            
            return {
                day: index + 1,
                date: formatDate(dateStr),
                ramadanDay: index + 1,
                fajr: formatTime(fajrTime),
                dhuhr: formatTime(dhuhrTime),
                asr: formatTime(asrTime),
                maghrib: formatTime(maghribTime),
                isha: formatTime(ishaTime),
                sehri: formatTime(fajrTime),
                iftar: formatTime(maghribTime)
            };
        });

        return times;
    } catch (error) {
        console.error(`Error fetching data for ${cityName}:`, error);
        return null;
    }
}

// ============================================
// Initialize Prayer Times Data from AlAdhan API
// ============================================
async function initializePrayerTimes() {
    // Try to fetch from API for all cities
    const cities = Object.keys(prayerTimes);
    
    for (const cityKey of cities) {
        const apiData = await fetchPrayerTimesFromAlAdhan(cityKey);
        if (apiData && apiData.length > 0) {
            prayerTimes[cityKey].times = apiData;
        }
    }
    
    // Regenerate calendar if already initialized
    if (userCity && displayCity) {
        displayCity.textContent = prayerTimes[userCity].name;
        generateCalendar();
    }
}

// ============================================
// Global Variables
// ============================================
let userName = '';
let userCity = 'karachi'; // Default city

// ============================================
// DOM Elements
// ============================================
const mainContent = document.getElementById('mainContent');
const displayCity = document.getElementById('displayCity');
const tableBody = document.getElementById('tableBody');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');
const changeCityBtn = document.getElementById('changeCityBtn');
const changeCityPopup = document.getElementById('changeCityPopup');
const changeCityForm = document.getElementById('changeCityForm');
const changeCitySelect = document.getElementById('changeCitySelect');

// ============================================
// Generate Calendar Table
// ============================================
function generateCalendar() {
    const cityData = prayerTimes[userCity];
    if (!cityData) return;
    
    tableBody.innerHTML = '';
    
    // Get current date for highlighting
    const today = new Date();
    const currentDate = today.getDate();
    const currentMonth = today.getMonth();
    
    cityData.times.forEach((day, index) => {
        const row = document.createElement('tr');
        
        // Check if this is today (simplified check - you can enhance this)
        const isToday = index === 0; // For demo, highlight first day. You can add proper date logic
        
        // Parse date to check if it's today
        const dayDate = day.date.split(' ');
        const dayNum = parseInt(dayDate[1]);
        const isCurrentDay = (dayNum === currentDate && dayDate[0] === 'Feb' && currentMonth === 1) ||
                            (dayNum === currentDate && dayDate[0] === 'Mar' && currentMonth === 2);
        
        if (isCurrentDay || isToday) {
            row.classList.add('current-day');
        }
        
        row.innerHTML = `
            <td>${day.ramadanDay}</td>
            <td>${day.date}</td>
            <td>${getDayName(day.date)}</td>
            <td class="fajr-time time-cell">${day.fajr}</td>
            <td class="time-cell">${day.dhuhr}</td>
            <td class="time-cell">${day.asr}</td>
            <td class="maghrib-time time-cell">${day.maghrib}</td>
            <td class="time-cell">${day.isha}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Typing animation helper
function typeText(el, text, speed = 60) {
    if (!el) return;
    // ensure plain text
    const finalText = text || el.dataset.text || el.textContent || '';
    el.textContent = '';
    // caret removed: no extra class added
    let i = 0;
    function step() {
        if (i <= finalText.length) {
            el.textContent = finalText.slice(0, i);
            i++;
            setTimeout(step, speed);
        }
    }
    step();
}

// ============================================
// Theme Toggle Functionality
// ============================================
// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeButton(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
});

function updateThemeButton(theme) {
    if (theme === 'light') {
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Dark Mode';
    } else {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Light Mode';
    }
}

// ============================================
// Change City Functionality
// ============================================
changeCityBtn.addEventListener('click', () => {
    // Set current city in select dropdown
    changeCitySelect.value = userCity;
    // Show popup
    changeCityPopup.classList.add('show');
});

// Close popup when clicking outside
changeCityPopup.addEventListener('click', (e) => {
    if (e.target === changeCityPopup) {
        changeCityPopup.classList.remove('show');
    }
});

// Handle change city form submission
changeCityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newCity = changeCitySelect.value;
    
    if (!newCity) {
        alert('Please select a city');
        return;
    }
    
    // Update city
    userCity = newCity;
    localStorage.setItem('userCity', userCity);
    
    // Update display
    displayCity.textContent = prayerTimes[userCity].name;
    
    // Regenerate calendar with new city data
    generateCalendar();
    
    // Hide popup
    changeCityPopup.classList.remove('show');
});

// ============================================
// Download Calendar Functionality
// ============================================
const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', async () => {
    try {
        // Get only the calendar wrapper (table container)
        const calendarWrapper = document.querySelector('.calendar-wrapper');
        
        if (!calendarWrapper) {
            alert('Calendar not found. Please try again.');
            return;
        }
        
        // Create a temporary container to hold the content we want to capture
        const tempContainer = document.createElement('div');
        tempContainer.style.position = 'fixed';
        tempContainer.style.left = '-9999px';
        tempContainer.style.top = '-9999px';
        tempContainer.style.background = getComputedStyle(document.body).getPropertyValue('--card-bg') || '#ffffff';
        tempContainer.style.padding = '20px';
        tempContainer.style.borderRadius = '10px';
        
        // Clone only the calendar wrapper (table)
        const clonedWrapper = calendarWrapper.cloneNode(true);
        tempContainer.appendChild(clonedWrapper);
        document.body.appendChild(tempContainer);
        
        // Get background color based on current theme
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const backgroundColor = currentTheme === 'dark' ? '#1a2a2e' : '#ffffff';
        
        // Capture as image
        const canvas = await html2canvas(tempContainer, {
            backgroundColor: backgroundColor,
            scale: 2,
            useCORS: true,
            logging: false
        });
        
        // Remove temporary container
        document.body.removeChild(tempContainer);
        
        // Convert canvas to blob and download
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `Ramadan_Calendar_2026_${prayerTimes[userCity].name}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        });
    } catch (error) {
        console.error('Error downloading calendar:', error);
        alert('Failed to download calendar. Please try again.');
    }
});

// ============================================
// Initialize on Page Load
// ============================================
document.addEventListener('DOMContentLoaded', async () => {
    // Check for saved city preference or use default
    const savedCity = localStorage.getItem('userCity');
    if (savedCity && prayerTimes[savedCity]) {
        userCity = savedCity;
    }
    
    // Initialize main content with default data first
    displayCity.textContent = prayerTimes[userCity].name;
    generateCalendar();
    mainContent.classList.add('show');
    
    // Start typing animation for subtitle
    const typingEl = document.getElementById('typingSubtitle');
    if (typingEl) typeText(typingEl, typingEl.dataset.text, 60);
    
    // Fetch updated data from AlAdhan API
    await initializePrayerTimes();
});

// ============================================
// Mobile swipe indicator: fade-in and auto-hide
// ============================================
(function() {
    function triggerSwipeHint() {
        const ind = document.getElementById('swipeIndicator');
        if (!ind) return;
        if (window.innerWidth >= 768) return; // only mobile

        // show with a tiny delay for nicer timing
        ind.classList.add('show');

        // auto-hide after ~4.5s
        const hideAfter = 4500;
        setTimeout(() => {
            ind.classList.add('hide');
        }, hideAfter);

        // remove element after hide transition completes
        ind.addEventListener('transitionend', function onEnd(e) {
            if (ind.classList.contains('hide')) {
                ind.removeEventListener('transitionend', onEnd);
                try { ind.remove(); } catch (err) {}
            }
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        // slight defer so it doesn't clash with other entry animations
        setTimeout(triggerSwipeHint, 300);
    });
})();


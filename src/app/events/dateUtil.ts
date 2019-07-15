export default class DateUtils {
  private static monthConverter = {
    'Jan': '01',
    'Feb': '02',
    'Mar': '03',
    'Apr': '04',
    'May': '05',
    'Jun': '06',
    'Jul': '07',
    'Aug': '08',
    'Sep': '09',
    'Oct': '10',
    'Nov': '11',
    'Dec': '12'
  };


  static convertDate(date: string, time: string) {
    const splittedDate = date.split(' ');
    return `${splittedDate[3]}-${DateUtils.monthConverter[splittedDate[1]]}-${splittedDate[2]} ${time}`;
  }
}

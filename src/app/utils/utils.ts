export default class Utils {
  static dateFormat(date: string) {
    const newDate = date.split('-');

    return `${newDate[2]}/${newDate[1]}/${newDate[0]}`;
  }
}
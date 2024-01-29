//地球时间转化et
export default class EorzeaTimeConverter {
    static YEAR = 33177600;
    static MONTH = 2764800;
    static DAY = 86400;
    static HOUR = 3600;
    static MINUTE = 60;
    static SECOND = 1;

    static EORZEA_TIME_CONSTANT = 3600 / 175;

    static convertToEorzeaTime(date) {
        const earthTime = date.getTime() / 1000;
        const eorzeaTime = Math.floor(earthTime * EorzeaTimeConverter.EORZEA_TIME_CONSTANT);

        const ret = {
            YearVal: Math.floor(eorzeaTime / EorzeaTimeConverter.YEAR) + 1,
            MonthVal: Math.floor(eorzeaTime / EorzeaTimeConverter.MONTH % 12) + 1,
            DayVal: Math.floor(eorzeaTime / EorzeaTimeConverter.DAY % 32) + 1,
            HourVal: Math.floor(eorzeaTime / EorzeaTimeConverter.HOUR % 24),
            MinuteVal: Math.floor(eorzeaTime / EorzeaTimeConverter.MINUTE % 60),
            SecondVal: Math.floor(eorzeaTime / EorzeaTimeConverter.SECOND % 60),
        };

        return ret;
    }

    static convertToEorzeaTimeString(date, format) {
        const earthTime = date.getTime() / 1000;
        const eorzeaTime = Math.floor(earthTime * EorzeaTimeConverter.EORZEA_TIME_CONSTANT);

        const yearVal = "" + (Math.floor(eorzeaTime / EorzeaTimeConverter.YEAR) + 1);
        const monthVal = formatZero("" + (Math.floor(eorzeaTime / EorzeaTimeConverter.MONTH % 12) + 1));
        const dayVal = formatZero("" + (Math.floor(eorzeaTime / EorzeaTimeConverter.DAY % 32) + 1));
        const hourVal = formatZero("" + Math.floor(eorzeaTime / EorzeaTimeConverter.HOUR % 24));
        const minuteVal = formatZero("" + Math.floor(eorzeaTime / EorzeaTimeConverter.MINUTE % 60));
        const secondVal = formatZero("" + Math.floor(eorzeaTime / EorzeaTimeConverter.SECOND % 60));

        return format.replace("%s", yearVal)
            .replace("%s", monthVal)
            .replace("%s", dayVal)
            .replace("%s", hourVal)
            .replace("%s", minuteVal)
            .replace("%s", secondVal);
    }

    static parseEorzeaTimeString(timestring, format) {
        const date = new Date(timestring);
        return date;
    }

    static convertToEarthTime(timestring, format) {
        const date = this.parseEorzeaTimeString(timestring, format);

        const years = date.getFullYear();
        const months = date.getMonth() + 1;
        const days = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const utc = Math.floor(((years - 1) * EorzeaTimeConverter.YEAR + (months - 1) * EorzeaTimeConverter.MONTH + (days - 1) * EorzeaTimeConverter.DAY + hours * EorzeaTimeConverter.HOUR + minutes * EorzeaTimeConverter.MINUTE + seconds) / EorzeaTimeConverter.EORZEA_TIME_CONSTANT);

        return new Date(utc * 1000);
    }

    static formatZero(str) {
        return str.length === 1 ? "0" + str : str;
    }

     startClockUpdate(intervalMilliseconds) {
        setInterval(() => {
            const now = new Date();
            const eorzeaTime = EorzeaTimeConverter.convertToEorzeaTime(now);
            console.log("Current Eorzea Time: ", eorzeaTime.HourVal + ":" + eorzeaTime.MinuteVal + ":" + eorzeaTime.SecondVal);
        }, intervalMilliseconds);
    }
}
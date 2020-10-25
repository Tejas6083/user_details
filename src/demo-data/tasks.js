export const tasks = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          ok: true,
          members: [
            {
              id: "W012A3CDE",
              real_name: "Egon Spengler",
              tz: "America/Los_Angeles",
              activity_periods: [
                {
                  start_time: "Oct 1 2020 4:02 PM",
                  end_time: "Oct 2 2020 2:00 AM",
                },
                {
                  start_time: "Oct 3 2020 6:02 PM",
                  end_time: "Oct 4 2020 5:00 AM",
                },
                {
                  start_time: "Oct 26 2020 5:02 PM",
                  end_time: "Oct 27 2020 4:00 AM",
                },
                {
                  start_time: "Oct 27 2020 5:02 PM",
                  end_time: "Oct 28 2020 3:00 AM",
                },
              ],
            },
            {
              id: "W07QCRPA4",
              real_name: "Glinda Southgood",
              tz: "Asia/Kolkata",
              activity_periods: [
                {
                  start_time: "Oct 26 2020 1:33 PM",
                  end_time: "Oct 26 2020 1:54 PM",
                },
                {
                  start_time: "Oct 27 2020 11:11 AM",
                  end_time: "Oct 27 2020 2:00 PM",
                },
                {
                  start_time: "Nov 1 2020 5:33 PM",
                  end_time: "Nov 1 2020 8:02 PM",
                },
              ],
            },
            {
              id: "W012A3CDH",
              real_name: "Lakshmi Narasimha",
              tz: "America/Los_Angeles",
              activity_periods: [
                {
                  start_time: "Oct 17 2020 4:02 PM",
                  end_time: "Oct 18 2020 2:00 AM",
                },
                {
                  start_time: "Oct 29 2020 6:02 PM",
                  end_time: "Oct 30 2020 5:00 AM",
                },
                {
                  start_time: "Oct 30 2020 5:02 PM",
                  end_time: "Oct 31 2020 4:00 AM",
                },
                {
                  start_time: "Nov 1 2020 5:02 PM",
                  end_time: "Nov 2 2020 3:00 AM",
                },
              ],
            },
          ],
        }),
      2000
    );
  });
};

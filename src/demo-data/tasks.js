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
                  start_time: "Oct 1 2020 12:00 AM",
                  end_time: "Oct 1 2020 11:59 PM",
                },
                {
                  start_time: "Oct 1 2020 2:33 PM",
                  end_time: "Oct 1 2020 5:54 PM",
                },
                {
                  start_time: "Oct 28 2020 2:11 PM",
                  end_time: "Oct 28 2020 5:00 PM",
                },
                {
                  start_time: "Nov 2 2020 8:33 PM",
                  end_time: "Nov 2 2020 9:02 PM",
                },
              ],
            },
            {
              id: "W07QCRPA4",
              real_name: "Glinda Southgood",
              tz: "Asia/Kolkata",
              activity_periods: [
                {
                  start_time: "Oct 27 2020 1:33 PM",
                  end_time: "Oct 27 2020 1:54 PM",
                },
                {
                  start_time: "Sep 30 2020 11:11 AM",
                  end_time: "Sep 30 2020 2:00 PM",
                },
                {
                  start_time: "Oct 16 2020 5:33 PM",
                  end_time: "Oct 16 2020 8:02 PM",
                },
              ],
            },
          ],
        }),
      2000
    );
  });
};

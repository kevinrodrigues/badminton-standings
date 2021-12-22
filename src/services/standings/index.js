export default {
  // Needs to move to a api
  getLeagueResults(day) {
    switch (day) {
      case 'sunday':
        return [
          {
            player: 'Kevin',
            played: 43,
            won: 19,
            lost: 24,
            late: 0,
            total: 0,
            ave: 0,
          },
          {
            player: 'Devin',
            played: 34,
            won: 23,
            lost: 11,
            late: 1,
            total: 0,
            ave: 0,
          },
          {
            player: 'Rajeve',
            played: 43,
            won: 18,
            lost: 25,
            late: 1,
            total: 0,
            ave: 0,
          }];

      default:
        break;
    }

    return false;
  },

  getLastMatchDetails(day) {
    switch (day) {
      case 'thursday':
        return [
          {
            teamOne: [
              'BLACKS ⚫',
              'Kurt',
              'Kannan',
              'Leigh',
              'Gracie',
              'Lilley',
              'Kev',
              'Dane',
            ],
            teamTwo: [
              'WHITES ⚪',
              'Millen',
              'Sageeth',
              'Brandon',
              'Tony',
              'Ashok',
              'German',
              'Kelly',
            ],
            mom: [
              '👏 - Sageeth',
            ],
            fines: [],
            dropOuts: [],
            finalScore: '6 - 2 - Whites',
            matchNumber: 6,
          }];

      default:
        break;
    }

    return false;
  },
};

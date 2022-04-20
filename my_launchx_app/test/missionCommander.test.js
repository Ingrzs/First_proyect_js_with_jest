const MissionCommander = require('./../app/missionCommander');
describe("prueba unitaria de la clase missioncomander", () => {
  test('1) Create un objeto de mission lo que harias en tu index', () => {
    const myMissionCommander = new MissionCommander("Woopa")
    expect(myMissionCommander.name).toBe("Woopa");
    });
  })
  
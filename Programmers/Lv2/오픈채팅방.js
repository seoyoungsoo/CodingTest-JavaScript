// 오픈채팅방

const solution = (record) => {
  const user = {};
  const arr = [];
  const Obj = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  for (let i = 0; i < record.length; i++) {
    const [state, id, nickName] = record[i].split(' ');

    if (nickName) user[id] = nickName;
    if (state !== 'Change') arr.push([state, id]);
  }

  return arr.map(([state, id]) => `${user[id]}${Obj[state]}`);
}

const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];
console.log(solution(record));
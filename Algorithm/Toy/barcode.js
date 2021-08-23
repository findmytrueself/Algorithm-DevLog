// 문제 : 1,2,3으로만 이루어진 수열 바코드를 만들어야 한다. 바코드에서 인접한 두 개의 부분 수열이 동일하다면 제작할 수 없다고 할 때, 주어진 길이 len의 바코드 중 가장 작은 수를 반환하는 함수를 작성하세요.
// 입출력예시 : barcode(3) "121"
//           barcode(7) "1213121"
//           barcode(20) "12131231321231213123"

function barcode(len) {
  const isValid = (str) => {
    const reversed = str.split("").reverse().join("");
    // 최대 절반 길이만큼의 부분 수열이 가능
    const halfLen = Math.floor(str.length / 2);
    for (let i = 1; i <= halfLen; i++) {
      if (reversed.slice(0, i) === reversed.slice(i, i + i)) {
        return false;
      }
    }
    return true;
  };

  const chr = "123"; // 바코드 조건

  const aux = (str) => {
    if (str.length === len) return str;
    for (let i = 0; i < chr.length; i++) {
      if (isValid(str + chr[i])) {
        const founded = aux(str + chr[i]);
        if (founded !== null) {
          return founded;
        }
      }
    }
    return null;
  };

  return aux("");
}

console.log(barcode(5));

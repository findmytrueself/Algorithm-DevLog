function solution(sizes) {
    sizes = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));
    let wMax = Math.max.apply(
        null,
        sizes.map((el) => el[0])
    );
    let hMax = Math.max.apply(
        null,
        sizes.map((el) => el[1])
    );
    return wMax * hMax;
}

const result = (max, middle, min) => {
    return `${min} < ${middle} < ${max}`;
};

const sortThreeNumbers = (first, second, third) => {
    if (first >= second && first >= third && second >= third) {
        return result(first, second, third);
    }

    if (first >= second && first >= third && second <= third) {
        return result(first, third, second);
    }

    if (second >= first && second >= third && first >= third) {
        return result(second, first, third);
    }

    if (second >= first && second >= third && first >= third) {
        return result(second, third, first);
    }

    if (first >= second) {
        return result(third, first, second);
    } else {
        return result(third, second, first);
    }
};

console.log(sortThreeNumbers(2, 8, 78));
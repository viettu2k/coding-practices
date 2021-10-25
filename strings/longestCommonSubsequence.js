// solution 1
// Time complexity: O((n+m).2^n)
// Space complexity: O(n.2^n)
function isSubsequence(str1, str2) {
    let ptr1 = (ptr2 = 0);
    while (ptr1 < str1.length && ptr2 < str2.length) {
        if (str1.charAt(ptr1) == str2.charAt(ptr2)) {
            ptr1++;
            ptr2++;
        } else {
            ptr1++;
        }
    }
    return ptr2 == str2.length;
}

function getSubsequences(str) {
    let subsequences = [];

    function rec(str, i, subsequence) {
        if (i == str.length) {
            subsequences.push(subsequence);
        } else {
            rec(str, i + 1, subsequence + str[i]);
            rec(str, i + 1, subsequence);
        }
    }
    rec(str, 0, "");
    return subsequences;
}

function lcs(str1, str2) {
    let maxLength = 0;
    let subsequences = getSubsequences(str1);
    for (subsequence of subsequences) {
        if (isSubsequence(str2, subsequence) && subsequence.length > maxLength)
            maxLength = subsequence.length;
    }
    return maxLength;
}

// solution 2
// Time complexity: O(2^(n+m))
// Space complexity: O(n + m)
function lcs(str1, str2, i = 0, j = 0) {
    if (i == str1.length || j == str2.length) return 0;
    else if (str1[i] == str2[j]) return 1 + lcs(str1, str2, i + 1, j + 1);
    else return Math.max(lcs(str1, str2, i + 1, j), lcs(str1, str2, i, j + 1));
}

// solution 3
// Time complexity: O(nm)
// Space complexity: O(nm)
function lcs(str1, str2, i = 0, j = 0, memoiz = {}) {
    let key = i + " " + j;
    if (memoiz.get !== undefined) return memoiz[key];
    else if (i == str1.length || j == str2.length) return 0;
    else if (str1[i] == str2[j]) return 1 + lcs(str1, str2, i + 1, j + 1, memoiz);
    else {
        let output = Math.max(
            lcs(str1, str2, i + 1, j, memoiz),
            lcs(str1, str2, i, j + 1, memoiz)
        );
        memoiz[key] = output;
        return output;
    }
}

// solution 3
// Time complexity: O(nm)
// Space complexity: O(nm)
function lcs(str1, str2) {
    let n = str1.length;
    let m = str2.length;
    let dp = [...Array(n + 1)].map((row) => [...Array(m + 1)].map((x) => 0));
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < m + 1; j++) {
            if (str1[i - 1] == str2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return dp[n][m];
}

// solution 4
// Time complexity: O(nm)
// Space complexity: O(m)
function lcs(str1, str2) {
    let n = str1.length;
    let m = str2.length;
    let dp = [...Array(m + 1)].map((x) => 0);
    let tempDp = [...Array(m + 1)].map((x) => 0);
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < m + 1; j++) {
            if (str1[i - 1] == str2[j - 1]) tempDp[j] = 1 + dp[j - 1];
            else tempDp[j] = Math.max(tempDp[j - 1], dp[j]);
        }
        for (let j = 1; j < m + 1; j++) {
            dp[j] = tempDp[j];
            tempDp[j] = 0;
        }
    }
    return dp[m];
}
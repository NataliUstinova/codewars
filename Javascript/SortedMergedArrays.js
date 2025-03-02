let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n=3;

const merge = function(nums1, m, nums2, n) {
  let i = m - 1;  // Указатель на последний элемент в nums1
  let j = n - 1;  // Указатель на последний элемент в nums2
  let k = m + n - 1;  // Указатель на последний элемент в nums1

  // Слияние массивов
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // Если остались элементы в nums2, копируем их
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }

  // Если остались элементы в nums1, они уже на своих местах
};

const merge2 = (nums1, n, nums2, m) => {
  let a = m - 1; //pointer to the last useful digit of nums1
  let b = n - 1; //pointer to the last element of nums2
  let c= n + m - 1; //pointer to the last element of nums1
  
  while (a >= 0 && b >= 0) {
    nums1[c--] = nums1[a] > nums2[b] ? nums1[a--] : nums2[b--];
  }
  while (b >= 0 ) {
    nums1[c--] = nums2[b--];
  }
}

const merge3 = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[m+i] = nums2[i];
  }
  nums1.sort((a,b) => a-b);
};

merge2(nums1, n, nums2, m)

console.log(nums1)
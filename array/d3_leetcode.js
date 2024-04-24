// https://leetcode.com/problems/longest-common-prefix/description/

/**
 * Write a function to find the longest common prefix string amongst an array of strings.If there is no common prefix, return an empty string "".

Example 1: ---> Input: strs = ["flower","flow","flight"] , Output: "fl"
Example 2: ---> Input: strs = ["dog","racecar","car"] , Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
 */

const strs = ["flower","flow","flight"];
// const strs = ["dog","racecar","car"];

// M1

const lcprefix = (strs) => {
    let curr = strs[0];

    for(let word of strs){
        // for(let i=0; i<curr.length; i++){
        //     if(curr[i] !== word[i]){
        //         curr = curr.slice(0, i)
        //     }
        // }

        for(let i=curr.length-1; i>=0; i--){
            if(curr[i] !== word[i]){
                curr = curr.slice(0, i)
            }
        }
    }

    return curr
}

console.log(lcprefix(strs))

// M2

const lcprefix1 = (strs) => {
    let curr = strs[0];
    let res = ''

    for(let i=1; i<strs.length; i++){
        for(let j=0; j<curr.length; j++){
            if(curr[j] === strs[i][j]){
                res+= curr[j]
            }
        }

        curr = res;
        res = ''
    }

    return curr

}

console.log(lcprefix1(strs))

// https://leetcode.com/problems/pascals-triangle/

/**
 * Given an integer numRows, return the first numRows of Pascal's triangle.In Pascal's triangle, each number is the sum of the two numbers directly above it as shown: 

Example 1: ---> Input: numRows = 5 , Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2: ---> Input: numRows = 1 , Output: [[1]]

Constraints:

1 <= numRows <= 30
 */

const numRows = 5
// const numRows = 1

const pascalTri = (numRows) => {
    const result = []

    for (let i = 0; i < numRows; i++) {
        let val = 1;
        let row = [];

        for (let j = 0; j <= i; j++) {
            row.push(val);
            val = val*((i-j)/(j+1))            
        }
        result.push(row)
    }
    return result
}

console.log(pascalTri(numRows))

// https://leetcode.com/problems/remove-element/description/

/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val. 

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

Example 1: ---> Input: nums = [3,2,2,3], val = 3 , Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2: ---> Input: nums = [0,1,2,2,3,0,4,2], val = 2 , Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).

Constraints:

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100
 */

const nums = [3,2,2,3] 
const val = 3
// const nums = [0,1,2,2,3,0,4,2] 
// const val = 2

const removeElement = (nums, val) => {
    let k=0; //counter

    for(let i=0; i<nums.length; i++){
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++
        }
    }
    return k
}

console.log(removeElement(nums, val))

// https://leetcode.com/problems/unique-email-addresses/description/

/**
 * Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name. If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address. If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

For example, "m.y+name@email.com" will be forwarded to "my@email.com". It is possible to use both of these rules at the same time.

Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.

Example 1: ----> Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"] , Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.

Example 2: ----> Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"] , Output: 3
 
Constraints:

1 <= emails.length <= 100
1 <= emails[i].length <= 100
emails[i] consist of lowercase English letters, '+', '.' and '@'.
Each emails[i] contains exactly one '@' character.
All local and domain names are non-empty.
Local names do not start with a '+' character.
Domain names end with the ".com" suffix.
 */


// M1 ---> TC - O(n*k) | SC - O(n)

// const emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];
const emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"];

const numOfUniqueEmails = (emails) => {
    

    const valid = emails.map((e)=> {
        const [local, domain] = e.split("@")
        return (
            local.split("+").shift().split(".").join("") + "@" + domain
        )
    })

   const set = new Set(valid)

    return set.size
}

console.log(numOfUniqueEmails(emails))

// M2 ---> TC - O(n*k) | SC - O(n)

const numOfUniqueEmails1 = (emails) => {
    const set = new Set()

    for (const email of emails) {
        let cleanEmail = ""
        for (let i = 0; i < email.length; i++) {
            if(email[i] === "@"){
                cleanEmail +=email.slice(i)
                break;
            } else if (email[i] === "+") {
                while (email[i] !== "@") i++;
                cleanEmail += email.slice(i);
                break;
            } else if (email[i] !== ".") {
                cleanEmail += email[i]
            }            
        }

        set.add(cleanEmail)
    }

    return set.size
}

console.log(numOfUniqueEmails1(emails))
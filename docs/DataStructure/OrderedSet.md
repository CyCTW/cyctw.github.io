---
image: https://i.imgur.com/mErPwqL.png
tags:
  - c++
  - python
  - ordered set
  - data structure
last_update:
  date: 2/6/2023
  author: cyctw
toc_max_heading_level: 2

# Used by SEO
description: Ordered Set 是一種 集合 資料結構，集合裡面的元素會依照某種規則排序，像是升冪、降冪排列，或是自定義的排列方法。
keywords:
  - docs
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Ordered Set

## Introduction
Ordered Set 是一種 **集合** 資料結構，集合裡面的元素會依照某種規則排序，像是升冪、降冪排列，或是自定義的排列方法。

感覺有點像是 Heap(堆積)，但是 Heap 內的元素只保證頭(或尾)的值是極值，並沒有保證整個資料結構內的元素都是排序過的。

而 Ordered set 也可以分成兩種: 
1. 集合內不允許有重複值
2. 集合內允許有重複值

## Operations
這種資料結構常見的操作如下:
- Insert: 
    - 插入一個元素
    - 時間複雜度: $O(log\thickspace n)$
- Remove: 
    - 移除掉一個元素
    - 時間複雜度: $O(log\thickspace n)$
- Find:
    - 檢查某個元素在不在集合裡面
    - 時間複雜度: $O(log\thickspace n)$
- Find k-th element:
    - 找出集合內第k個元素是哪個 
    - 時間複雜度: $O(log\thickspace n)$
- Find insertion position of k:
    - 找出 k 值插入集合後的位置
    - Note: k 不一定要在集合內，而此操作沒有真的插入
    - 時間複雜度: $O(log\thickspace n)$

:::tip
以上的時間複雜度 $n$ 皆代表執行此操作時的**集合大小**。
:::


## Implementation
<Tabs>
<TabItem value="C++" label="C++" default>

在 C++ 中講到Ordered Set通常會想到 [set](https://cplusplus.com/reference/set/set/)。然而 set 在執行 *Find insertion position of k* 操作時只能用 $O(n)$ 的時間去做到。

因此，這裡要介紹的是[Policy based data structures: Ordered Set](https://www.geeksforgeeks.org/ordered-set-gnu-c-pbds/)。他有提供 `find_by_order()` 操作，且只需 $O(log\thickspace n)$ 的時間。

### Include header files
```cpp
#include <ext/pb_ds/assoc_container.hpp> // Common file
#include <ext/pb_ds/tree_policy.hpp> // Including tree_order_statistics_node_update
using namespace __gnu_pbds;
```
### Define type
```cpp
using ordered_set = tree<int, null_type, less<int>, rb_tree_tag, tree_order_statistics_node_update>;
```
這裡定義的五種type分別為:
```cpp
template<
typename Key, // Key type
typename Mapped, // Mapped-policy
typename Cmp_Fn = std::less<Key>, // Key comparison functor
typename Tag = rb_tree_tag, // Specifies which underlying data structure to use
template<typename Const_Node_Iterator, typename Node_Iterator, typename Cmp_Fn_, typename Allocator_> class Node_Update = null_node_update, // A policy for updating node invariants
```
- 第一第二個可以想成是 `map<type1, type2>` 裡面的兩種type。若要當成`set`使用的話則第二個宣告為`null_type`就好。
- 第三個是comparison function，決定集合內的值要如何排序。
- 第四個是使用的tree structure。
- 第五個是更新 node 的方法。

### Ordered set
```cpp
ordered_set orderedSet;

// 1. Insert operation
orderedSet.insert(2);
orderedSet.insert(-5);
orderedSet.insert(16);
orderedSet.insert(1048);

// 2. Find the k-th element (start from 0) operation, and return its iterator.
cout << *orderedSet.find_by_order(0) << endl; // -5
cout << *orderedSet.find_by_order(1) << endl; // 2

// 3. Erase operation
orderedSet.erase(2);

cout << *orderedSet.find_by_order(1) << endl; // 16, because 2 is removed
cout << (orderedSet.find(1048) != end(orderedSet)) << endl; // true
cout << (end(orderedSet) == orderedSet.find_by_order(6)) << endl; // true, because 6 > orderedSet.size()

// 4. Find insertion position of k. Return the number of item that is strictly smaller than "key"
cout << orderedSet.order_of_key(-5) << endl;  // 0
cout << orderedSet.order_of_key(1) << endl;   // 1
```
### Ordered multiset
上述定義的資料結構無法存取重複元素，要能存取重複元素有兩種實作方法:
1. 使用 `pair<int, int>`

`pair<int, int>` 第一個key一樣存插入的值，第二個key存index(同個值的index要不一樣)。

```cpp
using ordered_multiset = tree<pair<int, int>, null_type, less<pair<int, int>>, rb_tree_tag, tree_order_statistics_node_update>;

ordered_multiset orderedMultiset;

orderedMultiset.insert({2, 0});
orderedMultiset.insert({2, 1});
orderedMultiset.insert({2, 2});
orderedMultiset.insert({3, 0});

cout << orderedMultiset.find_by_order(2)->first << endl; // 2

// Return all element that less than 3
cout << orderedMultiset.order_of_key({3, -1}) << endl;  // 3
```
2. Comparison function 改成 `less_equal`

雖然這個方法看起來比較直觀，但因為改了 comparison function，在`erase`, `lower_bound`等操作會跟原本的有些差距，因此建議還是使用第一種方法較好。
> `lower_bound` 與 `upper_bound` 的操作似乎會反過來。

```cpp
using ordered_multiset = tree<int, null_type, less_equal<int>, rb_tree_tag, tree_order_statistics_node_update>;

ordered_multiset orderedMultiset;
orderedMultiset.insert(2);
orderedMultiset.insert(2);
orderedMultiset.insert(3);
orderedMultiset.insert(2);

cout << *orderedMultiset.find_by_order(2) << endl; // 2

// Return all element that less than 3
cout << orderedMultiset.order_of_key(3) << endl;  // 3

// Erase becomes tricky since we can't directly remove by orderedMultiset.erase(2)
orderedMultiset.erase(orderedMultiset.find_by_order(orderedMultiset.order_of_key(2)));

// output 2 2 3
for(auto &ele: orderedMultiset) {
    cout << ele << ' ';
}

```

### Ordered map
使用方法與 Ordered set 類似，而插入的操作也支援使用`[]`去設值。
```cpp
using ordered_map = tree<int, int, less<int>, rb_tree_tag, tree_order_statistics_node_update>;

ordered_map orderedMap;

// Insert element
orderedMap[3] = 4;
orderedMap[1] = 5;
orderedMap.insert({2, 888});

// Erase element
orderedMap.erase(2);

auto [key, value] = *orderedMap.find_by_order(1); 
cout << key << ' ' << value << '\n'; // 3 4
```

### Reference
- https://codeforces.com/blog/entry/11080
- https://www.geeksforgeeks.org/how-to-store-duplicate-elements-in-ordered-set-in-cpp/

</TabItem>
<TabItem value="Python" label="Python">

Python可以使用 [SortedList](https://grantjenks.com/docs/sortedcontainers/sortedlist.html) 來達成以上操作。

### Download package
```bash
pip install sortedcontainers
```

### SortedList
```python
from sortedcontainers import SortedList
sl = SortedList()
sl = SortedList([1, 2])

# Add element
sl.add(2)
sl.update([3, 5])

# Remove element
sl.remove(3) # If value not exists, raise error
sl.discard(3) # If value not exists, do nothing


# Find kth element
secondElement = sl[1] 

print(sl) # 1 2 2 5

# Find insertion point
sl.bisect_left(2) # return 1. If searched value exists, return leftmost. 
sl.bisect_right(2) # return 3. If searched value exists, return rightmost. 


# clear
sl.clear()

# Optional second parameter: key comparion function
sl_rev = SortedList([1, 2], lambda x: -x)
print(sl_rev) # 2, 1
```

### SortedSet
SortedSet 建立在原生的`set`與 `SortedList`之上，因此可以使用`set`的方法，且擁有`set`不能存重複值的特性。

```python
from sortedcontainers import SortedSet
ss1 = SortedSet()

ss1.add(2)
ss1.update([2, 3])
print(ss1) # 2, 3

ss2 = SortedSet([3, 4, 5])

# Peform built-in set operation
ss1.union(ss2)
print(ss1) # 2 3 4 5
```
### SortedDict
SortedSet 建立在原生的`dict`與 `SortedList`之上，因此可以使用`dict`的方法。
```python
from sortedcontainers import SortedDict
sd = SortedDict()
sd[1] = 2
sd[2] = 3

print(sd.keys()) # 1, 2
```
### Reference
- https://grantjenks.com/docs/sortedcontainers/introduction.html
- https://grantjenks.com/docs/sortedcontainers/sortedlist.html

</TabItem>
</Tabs>




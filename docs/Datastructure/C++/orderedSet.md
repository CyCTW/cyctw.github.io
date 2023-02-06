---
image: https://i.imgur.com/mErPwqL.png
tags:
  - c++
  - ordered set
# Used by search engine
description: how
keywords:
  - docs
  - docusaurus
---
# C++ Ordered Set
## Introduction
Ordered Set 資料結構類似 C++ 的 set(已排序的集合)，但多了一些功能。最常用的有以下兩種:

1. 給定某個 key, 尋找該 key 在set 裡面的位置。該key可以是任意值，不一定要在set裡面。 (order_of_key)
2. 查看set中第k個位置的值是多少 (find_by_order)

若使用一般的 set，要做到`1.` 可以使用 `set.lower_bound()` , `set.upper_bound()`，複雜度為`O(log n)`。但是`2.`就必須花線性的時間去達成。

ordered 有提供 `find_by_order()` 讓操作`2.`只需`O(log n)`的時間。

## Examples
### Include header files
```c=
#include <ext/pb_ds/assoc_container.hpp> // Common file
#include <ext/pb_ds/tree_policy.hpp> // Including tree_order_statistics_node_update

using namespace __gnu_pbds;
```
### Define type
```
using ordered_set = tree<int, null_type, less<int>, rb_tree_tag, tree_order_statistics_node_update>;

```

### Ordered set
### Ordered map
### Ordered multiset
有兩種實作方法
1. 使用pair
2. comparison function改成 less_equal

## Reference
- https://codeforces.com/blog/entry/11080
- https://www.geeksforgeeks.org/how-to-store-duplicate-elements-in-ordered-set-in-cpp/


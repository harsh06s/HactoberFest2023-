def selection_sort(arr):
    n = len(arr)

    for i in range(n):
        # Assume the current index contains the minimum value
        min_index = i

        # Find the index of the minimum element in the unsorted part
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j

        # Swap the minimum element with the first element of the unsorted part
        arr[i], arr[min_index] = arr[min_index], arr[i]

#!/usr/bin/python3

def search_replace(my_list, search, replace):
    new_list = my_list.copy()

    for i in range(0, len(new_list)):
        if new_list[i] == search:
            new_list[i] = replace

    return new_list

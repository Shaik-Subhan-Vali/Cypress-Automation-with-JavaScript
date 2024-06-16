def are_anagrams(word1, word2):
    word1 = word1.replace(" ", "").lower()
    word2 = word2.replace(" ", "").lower()
    if sorted(word1) == sorted(word2):
        print("Yes, anagrams")
    else:
        print("No, not anagrams")

are_anagrams("listen", "silent")  
//yes
tinyArray
| insert 16.542 μs| append 48.792 μs| in this case the insert function ran faster then the append by a difference of 32.25 Micoseconds mean the smaller the number in this case two digits the faster the function runs and stops |   |   |

smallArray 
| insert 21.584 μs| append 47.458 μs| like the tinyArray the insert function ran faster then the append function by 25.874 Microseconds even though the apend function ran faster than the tinyArray meaning that the apend works better with more digits in this case three digits |  |  |

mediumArray
| insert 121.959 μs| append 76.666 μs| things change in this array with now 4 digits the function does the opposite and now the append ran faster than the insert function by 45.293 Microseconds  |   |   |

largeArray
| insert 8.690458 ms| append 724.541 μs| with now 5 digits the largeArray with the insert function now jumps to Milliseconds and append stays in Microseconds which shows that the it take more time for insert function to start and stop  |   |   |

extraLargeArray
| insert 1.2731331670000001 s| append 2.9655 ms| in this last example with extraLargeArray the functions change once again, for insert from Milliseconds to seconds and the append from Microseconds to Milliseconds. now the digits are up to 6 and seeing that big difference compared to the other arrays  |   |   |


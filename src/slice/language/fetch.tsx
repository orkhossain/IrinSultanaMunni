// slice/language.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getDictionary } from '@/get-dictionary'
import { setDictionary } from '.'

// Define the initial state, reducers, and selectors...

// Create an async thunk to fetch the dictionary
export const fetchDictionary: any = createAsyncThunk(
    'language/fetchDictionary',
    async (language: any, { dispatch }) => {
        try {
            const dictionary = await getDictionary(language)
            dispatch(setDictionary(dictionary))
        } catch (error) {
            console.error('Error fetching dictionary:', error)
            throw error
        }
    }
)

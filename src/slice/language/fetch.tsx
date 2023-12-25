import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getDictionary } from '@/i18n/get-dictionary'
import { setDictionary } from '.'

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

import { weatherReducer }  from './weatherReducer'
import { addWeather } from '../Actions/index'

describe('weatherReducer', () => {
  it('should return the initial state', () => {
    const expected = []
    const result = weatherReducer(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should return the updated state', () => {
    const weatherlocals = ['Chattanooga','Murfreesboro']
    const result = weatherReducer(weatherlocals, addWeather(weatherlocals))
    expect(result).toEqual(weatherlocals)
  })
})
import axios from "axios";
import {  createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuestions = createAsyncThunk(
    "fetchQuestions",
    async(arg, {rejectWithValue}) => {
                console.log(arg)
                
                try{ 
                    const response = await axios.get("https://quiz-app-api-jade.vercel.app/questions");
            const data = await response.data 
                    console.log(rejectWithValue())
            console.log(data.questions)
            return data.questions
            
        }catch(err){
            return rejectWithValue(err.message)
        }
    }
);

const initialState = {
    questions: [],
    status: 'loading',
    isDisabled : false,
    index : 0,
    points : 0,
    TotalNo: 0,
    totalPoints : 0,
    HighScore : 0

};

export const MyQuestions = createSlice({
    name : 'MyQuestions',
    initialState,
    reducers : {
            Start : (state ) =>{
                state.status = "active"
                state.points = 0
                console.log("Started")
            },
            disABLED: (state , action) => {
                state.isDisabled= true 
                state.points += action.payload

            },
            NextQues : (state ) => {
                state.isDisabled= false 
                state.index = state.index + 1 ;

            },
            FinsheQuiz : (state) =>{
                
                state.status = "finished"
                        state.totalPoints = state.points;
                        if( state.HighScore > state.totalPoints ){
                            state.HighScore = state.HighScores
                        }
                        else{
                            state.HighScore = state.totalPoints
                        }
                


            },
            Restart : (state ) =>{
           
                state.isDisabled  =  false;
                state.index  =  0;
                state.points  =  0;
                state.status =  'ready';
                state.totalPoints = 0
            }

    },

    extraReducers : (builder) =>{
        builder
        .addCase(fetchQuestions.pending,(state)=>{
            state.status = "loading"
            console.log('loading')
        })
        .addCase(fetchQuestions.fulfilled,(state, action)=>{
            state.status = "ready";
            state.questions = action.payload;
            state.TotalNo = state.questions.map(({points}) =>points).reduce((a,b)=> a+b , 0)
            console.log('ready')


        })
        .addCase(fetchQuestions.rejected,(state)=>{
            state.status = 'error';
            console.log('Api not working error')

        })
    }

})

export const {Start ,disABLED , NextQues ,FinsheQuiz ,Restart} = MyQuestions.actions;
export default MyQuestions.reducer;
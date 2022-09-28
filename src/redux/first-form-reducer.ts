import { stateType } from './../App';
import { formsDataType } from './../components/forms/forms';


export const actions = {
    changeNumber: (number: number) => ({ type: "CHANGE_NUMBER", newNumber: number }),
}
type actionType = {
    type: string,
    number: number,
    select: string,
    formIndex: 1 | 2,
    currData: stateType
}
export const firstFormReducer = (state: formsDataType, action: actionType) => {
    switch (action.type) {
        case "CHANGE_NUMBER": {
            const newState: formsDataType = state
            const number = action.number
            const select = action.select
            if (action.formIndex === 1) {
                newState.firstForm.number = number
                newState.firstForm.select = select



                if (select === newState.secondForm.select) {
                    newState.secondForm.number = number
                }
                switch (select) {
                    case 'EUR':
                        switch (newState.secondForm.select) {
                            case ('UAN'):
                                newState.secondForm.number = number * action.currData.EUR.buy
                                break
                            case ('USD'):
                                newState.secondForm.number = number * action.currData.EUR.buy / action.currData.USD.buy
                                break
                            case ('BTC'):
                                newState.secondForm.number = number * action.currData.EUR.buy / action.currData.USD.buy / action.currData.BTC.buy
                                break
                        }
                        break;
                    case ('BTC'):
                        switch (newState.secondForm.select) {
                            case ('USD'):
                                newState.secondForm.number = number * action.currData.BTC.buy
                                break
                            case ('UAN'):
                                newState.secondForm.number = number * action.currData.BTC.buy * action.currData.USD.buy
                                break
                            case ('EUR'):
                                newState.secondForm.number = number * action.currData.BTC.buy * action.currData.USD.buy / action.currData.EUR.buy
                                break
                        }
                        break

                    case ('USD'):
                        switch (newState.secondForm.select) {
                            case ('UAN'):
                                newState.secondForm.number = (number * action.currData.USD.buy)
                                break
                            case ('EUR'):
                                newState.secondForm.number = (number * action.currData.USD.buy / action.currData.EUR.buy)
                                break
                            case ('BTC'):
                                newState.secondForm.number = (number / action.currData.BTC.buy)
                                break
                        }
                        break
                    case ('UAN'):
                        switch (newState.secondForm.select) {
                            case ('USD'):
                                newState.secondForm.number = (number / action.currData.USD.buy)
                                break
                            case ('EUR'):
                                newState.secondForm.number = (number / action.currData.EUR.buy)
                                break
                            case ('BTC'):
                                newState.secondForm.number = (number / action.currData.USD.buy / action.currData.BTC.buy)
                                break
                        }
                        break
                }



            } else {
                newState.secondForm.number = number
                newState.secondForm.select = select



                if (newState.firstForm.select === select) {
                    newState.firstForm.number = number
                }
                switch (select) {
                    case 'EUR':
                        switch (newState.firstForm.select) {
                            case ('UAN'):
                                newState.firstForm.number = (number * action.currData.EUR.buy)
                                break
                            case ('USD'):
                                newState.firstForm.number = (number * action.currData.EUR.buy / action.currData.USD.buy)
                                break
                            case ('BTC'):
                                newState.firstForm.number = (number * action.currData.EUR.buy / action.currData.USD.buy / action.currData.BTC.buy)
                                break
                        }
                        break;
                    case ('BTC'):
                        switch (newState.firstForm.select) {
                            case ('USD'):
                                newState.firstForm.number = (number * action.currData.BTC.buy)
                                break
                            case ('UAN'):
                                newState.firstForm.number = (number * action.currData.BTC.buy * action.currData.USD.buy)
                                break
                            case ('EUR'):
                                newState.firstForm.number = (number * action.currData.BTC.buy * action.currData.USD.buy / action.currData.EUR.buy)
                                break
                        }
                        break
                    case ('USD'):
                        switch (newState.firstForm.select) {
                            case ('UAN'):
                                newState.firstForm.number = (number * action.currData.USD.buy)
                                break
                            case ('EUR'):
                                newState.firstForm.number = (number * action.currData.USD.buy / action.currData.EUR.buy)
                                break
                            case ('BTC'):
                                newState.firstForm.number = (number / action.currData.BTC.buy)
                                break
                        }
                        break
                    case ('UAN'):
                        switch (newState.firstForm.select) {
                            case ('USD'):
                                newState.firstForm.number = (number / action.currData.USD.buy)
                                break
                            case ('EUR'):
                                newState.firstForm.number = (number / action.currData.EUR.buy)
                                break
                            case ('BTC'):
                                newState.firstForm.number = (number / action.currData.USD.buy / action.currData.BTC.buy)
                                break
                        }
                        break
                }

            }

            return newState
        }
    }

    return state
}
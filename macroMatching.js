{

    //TODO: NOTATION SUGGESTION (!) When order is imperative, end the string with an exclamation point
    //EXAMPLE: 'follow the yellow brick road!'
    //parses the string exactly against the query, and only an exact match will trigger a response. g
    //TODO: NOTATION SUGGESTION (?) Tag trigger words of long phrases to prompt the AI to ask the user 
    //Exaample: '?follow the ?yellow ?brick road'
    //Parses as an array of strings, if each string is not contained in the query, the algorithm will test to see if the operative words exist, if so, the computer will assume you meant to say the pre-programmed query
    class Talkshow {
        constructor() {
            this.roboQandA = [ //Testing Datastructure
                {
                    answer: `I'm Fine; I'm Robert and I'm fine.`,
                    questions: [
                        'are ?you ?okay',
                        'how are you!',
                        'are ?you ?feeling well',
                    ]
                },
                {
                    answer: `No thank you.`,
                    questions: [
                        'would you like any assistance today',
                        'do you want to go to tahiti?',
                        'would you like to have your eyes eaten by ravens?',
                    ]
                },
                {
                    answer: `Don't Tell me what to do`,
                    questions: ['have a great day']
                },
                {
                    answer: 'That really got out of hand fast',
                    questions: ['well ?that ?escalated ?quickly!']

                }
            ]
        }
    }
}
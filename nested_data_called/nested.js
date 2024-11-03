
const users = {
    0: {
        id: 125364789,
        name: "shopia",
        contact: {
            phone: [
                "+1 123 456 7890",
                "+1 987 654 3210",
                "+880 12456325552"
            ],
            email: "shopia@gmail.com",
        },
        social: {
            facebook: 'facebook.com/shopia',
            linkedin: 'linkedin.com/shopia',
            twiter: 'twiter/shopia',
        },
        address: {
            street: 'Jl. Raya Jakarta',
            first_addres: {
                street: 'mirpur 10, dhaka',
                city: 'dhaka',
            },
            second: {
                street: 'lalbag, dhaka',
                city: 'rangpur',
            }
        }
    },
    1: {
        id: 124554,
        name: "sifat",
        contact: {
            phone: [
                "+1 123 45215 7890",
                "+1 987 45245 3210",
                "+880 56245245525"
            ],
            email: "shifat@gmail.com",
        },
        social: {
            facebook: 'facebook.com/shifat',
            linkedin: 'linkedin.com/shifat',
            twiter: 'twiter/shifat',
        },
        address: {
            street: 'Jl. Raya Jakarta',
            first_addres: {
                street: 'jl. lio ankjara',
                city: 'california',
            },
            second: {
                street: 'your place, hoilei hoilo',
                city: 'ase ekta',
            }
        }
    },


}


console.log(users); // Print All Users value
///////////////////////////////////////////////////////////////////////////////////////////////
// {
//     '0': {
//         id: 125364789,
//             name: 'shopia',
//                 contact: { phone: [Array], email: 'shopia@gmail.com' },
//         social: {
//             facebook: 'facebook.com/shopia',
//                 linkedin: 'linkedin.com/shopia',
//                     twiter: 'twiter/shopia'
//         },
//         address: {
//             street: 'Jl. Raya Jakarta',
//                 first_addres: [Object],
//                     second: [Object]
//         }
//     },
//     '1': {
//         id: 124554,
//             name: 'sifat',
//                 contact: { phone: [Array], email: 'shifat@gmail.com' },
//         social: {
//             facebook: 'facebook.com/shifat',
//                 linkedin: 'linkedin.com/shifat',
//                     twiter: 'twiter/shifat'
//         },
//         address: {
//             street: 'Jl. Raya Jakarta',
//                 first_addres: [Object],
//                     second: [Object]
//         }
//     }
// }//////////////////////////////////////////////////////////////////////////////////////////////////////


console.log(users[0]); //  Print First User value
// {//////////////////////////////////////////////////////////////////////////////////////////////////////
//     id: 125364789,
//         name: 'shopia',
//             contact: {
//         phone: ['+1 123 456 7890', '+1 987 654 3210', '+880 12456325552'],
//             email: 'shopia@gmail.com'
//     },
//     social: {
//         facebook: 'facebook.com/shopia',
//             linkedin: 'linkedin.com/shopia',
//                 twiter: 'twiter/shopia'
//     },
//     address: {
//         street: 'Jl. Raya Jakarta',
//             first_addres: { street: 'mirpur 10, dhaka', city: 'dhaka' },
//         second: { street: 'lalbag, dhaka', city: 'rangpur' }
//     }
// }///////////////////////////////////////////////////////////////////////////////////////////////////////



console.log(users[0].address); //print first user address
//////////////////////////////////////////////////////////////////////////
// {
//     street: 'Jl. Raya Jakarta',
//         first_addres: { street: 'mirpur 10, dhaka', city: 'dhaka' },
//     second: { street: 'lalbag, dhaka', city: 'rangpur' }
// }
//////////////////////////////////////////////////////////////////////////


console.log(users[0].address.second); //print  first user second address

////////////////////////////////////////////////////////////////////////////
//{ street: 'lalbag, dhaka', city: 'rangpur' }
////////////////////////////////////////////////////////////////////////////



console.log(users[0].address.second.city); //print first user  second address city

//////////////////////////////////////////////////////////////////////////////////
//rangpur
//////////////////////////////////////////////////////////////////////////////////




console.log(users[0].contact.phone) // print first users all  phone number
///////////////////////////////////////////////////////////////////////////////////
//[ '+1 123 456 7890', '+1 987 654 3210', '+880 12456325552' ]
///////////////////////////////////////////////////////////////////////////////////



console.log(users[0].contact.phone[2]); //print first user  third phone number
///////////////////////////////////////////////////////////////////////////////////////
// +880 12456325552
///////////////////////////////////////////////////////////////////////////////////////

const { gql } = require('apollo-server');

module.exports = gql`
type User {
    id: ID!
    username: String
    email: String!
    password: String!
    token: String!
}

type Trip {
    id: ID!
    title: String!
    createdBy: ID!
    createdAt: String!
    departureDate: String
    returnDate: String
    location: String
    participants: [Participant]
    # emergencyContacts: [EmergContact]
    # activities: [Activity]
    # supplies: [Supply]
    # comments: [Comment]
    tripStatus: TripStatusType
    updatedAt: String
}

type Participant {
    id: ID!
    userId: ID!
    firstName: String!
    lastName: String!
}

# type EmergContact {
#     id: ID!
#     userId: ID!
#     firstName: String!
#     lastName: String!
#     phoneNumber: String!
# }

input RegisterInput {
    username: String
    email: String
    password: String
    confirmPassword: String
}

input LoginInput {
    email: String
    password: String
}

input TripCreationInput {
    createdBy: ID!
    title: String!
    departureDate: String
    returnDate: String
    location: String
    participants: [ID]
    # emergencyContacts: [Contact]
    # activities: [Activity]
    # supplies: [Supply]
    # comments: [Comment]
    # tripStatus: TripStatusType
}

input TripUpdateInput {
    title: String
    departureDate: String
    returnDate: String
    location: String
    participants: [ID]
    # emergencyContacts: [Contact]
    # activities: [Activity]
    # supplies: [Supply]
    # comments: [Comment]
    # tripStatus: TripStatusType
}

input ParticipantInput {
    userId: ID!
    firstName: String!
    lastName: String!
}

enum TripStatusType {
    draft
    active
    completed
    overdue
}

type Query {
    getUser(id: ID!): User
    getTrip(id: ID!): Trip
    getTrips(userId: ID!): [Trip]
    getParticipants(userId: ID!): [Participant]
}

type Mutation {
    registerUser(registerInput: RegisterInput): User!
    loginUser(loginInput: LoginInput): User!
    createTrip(tripCreationInput: TripCreationInput): Trip!
    updateTrip(id: ID!, tripUpdateInput: TripUpdateInput): Trip!
    createParticipant(participantInput: ParticipantInput): Participant!
    deleteParticipant(id: ID!): Participant!
    deleteParticipants(ids: [ID]!): [Participant]!
}
`
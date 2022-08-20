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
    emergencyContacts: [Contact]
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

type Contact {
    id: ID!
    userId: ID!
    firstName: String!
    lastName: String!
    email: String
    phone: String!
    textAlert: Boolean!
}

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
    tripStatus: TripStatusType
    emergencyContacts: [ID]
    # activities: [Activity]
    # supplies: [Supply]
    # comments: [Comment]
}

input TripUpdateInput {
    title: String
    departureDate: String
    returnDate: String
    location: String
    participants: [ID]
    tripStatus: TripStatusType
    emergencyContacts: [ID]
    # activities: [Activity]
    # supplies: [Supply]
    # comments: [Comment]
}

input ParticipantInput {
    userId: ID!
    firstName: String!
    lastName: String!
}

input ContactInput {
    userId: ID!
    firstName: String!
    lastName: String!
    email: String
    phone: String!
    textAlert: Boolean
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
    getContacts(userId: ID!): [Contact]
}

type Mutation {
    registerUser(registerInput: RegisterInput): User!
    loginUser(loginInput: LoginInput): User!
    createTrip(tripCreationInput: TripCreationInput): Trip!
    updateTrip(id: ID!, tripUpdateInput: TripUpdateInput): Trip!
    createParticipant(participantInput: ParticipantInput): Participant!
    deleteParticipant(id: ID!): Participant!
    deleteParticipants(ids: [ID]!): [Participant]!
    addContact(contactInput: ContactInput): Contact!
}
`
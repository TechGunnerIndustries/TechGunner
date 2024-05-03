export interface User {
	username: string
	name: string
	bio: string
	email: string
	password: string
	followers: number
	following: string
	profile_picture: string
	banner: string
	level: string
	role: string
	points: number
	needs: number
	links: string[]
	verified: boolean
	skills: string[]
	language: string[]
	team: string[]
	notifications: string
	is_history_on: boolean
	liked: string[]
	disliked: string[]
	only_visible_to: string
	is_email_verified: boolean
	verification_token: string
	earning: string
	achievements: string
	joined: Date
}

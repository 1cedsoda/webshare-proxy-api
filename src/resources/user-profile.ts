import type { HttpClient } from "../http.js";
import type {
	UpdatePreferencesInput,
	UpdateProfileInput,
	UserPreferences,
	UserProfile,
} from "../schemas/user-profile.js";
import { UserPreferencesSchema, UserProfileSchema } from "../schemas/user-profile.js";

export class UserProfileResource {
	constructor(private readonly http: HttpClient) {}

	/** Retrieve the authenticated user's profile. */
	async retrieve(): Promise<UserProfile> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/profile/",
		});
		return UserProfileSchema.parse(data);
	}

	/** Update the authenticated user's profile. */
	async update(input: UpdateProfileInput): Promise<UserProfile> {
		const data = await this.http.request({
			method: "PATCH",
			path: "/api/v2/profile/",
			body: input,
		});
		return UserProfileSchema.parse(data);
	}

	/** Retrieve user preferences. */
	async retrievePreferences(): Promise<UserPreferences> {
		const data = await this.http.request({
			method: "GET",
			path: "/api/v2/profile/preferences/",
		});
		return UserPreferencesSchema.parse(data);
	}

	/** Update user preferences. */
	async updatePreferences(input: UpdatePreferencesInput): Promise<UserPreferences> {
		const data = await this.http.request({
			method: "PATCH",
			path: "/api/v2/profile/preferences/",
			body: input,
		});
		return UserPreferencesSchema.parse(data);
	}
}

import { ArticleStateInterface } from "src/app/article/types/articleState.interface";
import { AuthStateInterface } from "src/app/auth/types/authState.interface";
import { CreateArticleStateInterface } from "src/app/createArticle/store/types/createArticle.interface";
import { EditArticleStateInterface } from "src/app/editArticle/store/types/editArticle.interface";
import { SettingStateInterface } from "src/app/settings/types/settingsState.interface";
import { UserProfileStateInterface } from "src/app/userProfile/types/userProfileState.interface";
import { FeedStateInterface } from "../modules/feed/types/feedState.interface";
import { PopularTagsStateInterface } from "../modules/popularTags/store/effects/popularTagsState.interface";

export interface AppStateInterface {
    auth: AuthStateInterface,
    feed: FeedStateInterface,
    popularTags: PopularTagsStateInterface,
    article: ArticleStateInterface,
    createArticle: CreateArticleStateInterface,
    editArticle: EditArticleStateInterface,
    settings: SettingStateInterface,
    userProfile: UserProfileStateInterface,
}
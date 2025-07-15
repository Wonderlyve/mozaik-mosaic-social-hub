import { mockUsers, mockPosts } from '@/data/mockData';
import { Settings, Grid, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PostGrid } from '@/components/Feed/PostGrid';

// Using first user as current user for demo
const currentUser = mockUsers[0];
const userPosts = mockPosts.filter(post => post.user.id === currentUser.id);

export const Profile = () => {
  return (
    <div className="pb-4">
      {/* Profile Header */}
      <div className="p-4 space-y-4">
        {/* Top Row */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">{currentUser.username}</h1>
          <Button variant="ghost" size="sm" className="mozaik-touch">
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        {/* Stats Row */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="relative">
            <img
              src={currentUser.avatar}
              alt={currentUser.displayName}
              className="w-20 h-20 rounded-full object-cover border-2 border-border"
            />
          </div>

          {/* Stats */}
          <div className="flex-1 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="font-bold text-lg">{userPosts.length}</div>
              <div className="text-sm text-muted-foreground">Posts</div>
            </div>
            <div>
              <div className="font-bold text-lg">{currentUser.followers}</div>
              <div className="text-sm text-muted-foreground">Abonnés</div>
            </div>
            <div>
              <div className="font-bold text-lg">{currentUser.following}</div>
              <div className="text-sm text-muted-foreground">Abonnements</div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div>
          <h2 className="font-semibold">{currentUser.displayName}</h2>
          {currentUser.bio && (
            <p className="text-muted-foreground mt-1">{currentUser.bio}</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button className="flex-1 mozaik-gradient">
            Modifier le profil
          </Button>
          <Button variant="outline" className="flex-1">
            Partager le profil
          </Button>
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mx-4 mb-4">
          <TabsTrigger value="posts" className="flex items-center gap-2">
            <Grid className="w-4 h-4" />
            Posts
          </TabsTrigger>
          <TabsTrigger value="saved" className="flex items-center gap-2">
            <Bookmark className="w-4 h-4" />
            Sauvegardés
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="mt-0">
          {userPosts.length > 0 ? (
            <PostGrid posts={userPosts} loading={false} onPostClick={() => {}} />
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <Grid className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Aucun post pour le moment</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="saved" className="mt-0">
          <div className="text-center py-12 text-muted-foreground">
            <Bookmark className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p>Aucun post sauvegardé</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
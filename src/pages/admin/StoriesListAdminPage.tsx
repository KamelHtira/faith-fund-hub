import { AdminLayout } from "@/components/AdminLayout";

const StoriesListAdminPage = () => {
  return (
    <AdminLayout>
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-4">Admin - Manage Stories</h1>
          <p className="text-muted-foreground">This page is for admin to manage all stories and blog posts.</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default StoriesListAdminPage;
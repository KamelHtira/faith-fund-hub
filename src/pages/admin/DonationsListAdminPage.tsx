import { AdminLayout } from "@/components/AdminLayout";

const DonationsListAdminPage = () => {
  return (
    <AdminLayout>
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-4">Admin - Manage Donations</h1>
          <p className="text-muted-foreground">This page is for admin to view and manage all donation listings.</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DonationsListAdminPage;
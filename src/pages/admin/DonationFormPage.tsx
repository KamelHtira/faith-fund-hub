import { AdminLayout } from "@/components/AdminLayout";

const DonationFormPage = () => {
  return (
    <AdminLayout>
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-4">Admin - Create/Edit Donation</h1>
          <p className="text-muted-foreground">This page is for admin to create or edit donation opportunities.</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DonationFormPage;
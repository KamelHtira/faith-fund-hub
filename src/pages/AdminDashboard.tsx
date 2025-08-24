import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { RefreshCw, DollarSign, Users, Calendar } from "lucide-react";
import { AdminLayout } from "@/components/AdminLayout";

interface Donation {
  id: string;
  donor_name: string | null;
  donor_email: string | null;
  amount: number;
  currency: string;
  tag_note: string | null;
  status: string;
  created_at: string;
}

const AdminDashboard = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("donations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        toast({
          title: "Error",
          description: "Failed to fetch donations",
          variant: "destructive",
        });
        return;
      }

      setDonations(data || []);
      
      // Calculate total amount for successful donations
      const total = (data || [])
        .filter(d => d.status === 'paid')
        .reduce((sum, donation) => sum + Number(donation.amount), 0);
      setTotalAmount(total);
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while fetching donations",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatCurrency = (amount: number, currency: string = 'usd') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      paid: "default",
      pending: "secondary",
      failed: "destructive",
    };
    return <Badge variant={variants[status] || "outline"}>{status}</Badge>;
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
              <p className="text-muted-foreground">Manage donations and monitor activity</p>
            </div>
            <Button
              onClick={fetchDonations}
              variant="outline"
              size="sm"
              disabled={isLoading}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Donations</p>
                    <p className="text-2xl font-bold text-primary">{donations.length}</p>
                  </div>
                  <Users className="w-8 h-8 text-primary/60" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Amount</p>
                    <p className="text-2xl font-bold text-primary">{formatCurrency(totalAmount)}</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-primary/60" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Successful Donations</p>
                    <p className="text-2xl font-bold text-primary">
                      {donations.filter(d => d.status === 'paid').length}
                    </p>
                  </div>
                  <Calendar className="w-8 h-8 text-primary/60" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Donations Table */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                All Donations
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="text-center py-8">
                  <RefreshCw className="w-8 h-8 animate-spin mx-auto text-primary mb-2" />
                  <p className="text-muted-foreground">Loading donations...</p>
                </div>
              ) : donations.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No donations found</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 font-medium">Donor</th>
                        <th className="text-left p-2 font-medium">Email</th>
                        <th className="text-left p-2 font-medium">Amount</th>
                        <th className="text-left p-2 font-medium">Note/Tag</th>
                        <th className="text-left p-2 font-medium">Status</th>
                        <th className="text-left p-2 font-medium">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {donations.map((donation) => (
                        <tr key={donation.id} className="border-b hover:bg-muted/50">
                          <td className="p-2">
                            {donation.donor_name || "Anonymous"}
                          </td>
                          <td className="p-2 text-sm text-muted-foreground">
                            {donation.donor_email || "N/A"}
                          </td>
                          <td className="p-2 font-medium">
                            {formatCurrency(Number(donation.amount), donation.currency)}
                          </td>
                          <td className="p-2 text-sm">
                            {donation.tag_note || "No note"}
                          </td>
                          <td className="p-2">
                            {getStatusBadge(donation.status)}
                          </td>
                          <td className="p-2 text-sm text-muted-foreground">
                            {formatDate(donation.created_at)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
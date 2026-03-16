import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  CreditCard, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  Upload,
  Download,
  Eye,
  Calendar,
  DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const paymentHistory = [
  { id: 1, date: "Dec 1, 2024", description: "Pro Monthly - December", amount: 49.00, status: "paid" },
  { id: 2, date: "Nov 1, 2024", description: "Pro Monthly - November", amount: 49.00, status: "paid" },
  { id: 3, date: "Oct 1, 2024", description: "Pro Monthly - October", amount: 49.00, status: "paid" },
  { id: 4, date: "Sep 15, 2024", description: "Extra Session - React Advanced", amount: 25.00, status: "paid" },
  { id: 5, date: "Sep 1, 2024", description: "Pro Monthly - September", amount: 49.00, status: "paid" },
];

const outstandingFees = [
  { id: 1, description: "Extra Session - TypeScript Workshop", amount: 35.00, dueDate: "Dec 15, 2024" },
  { id: 2, description: "Course Materials - Advanced React Bundle", amount: 15.00, dueDate: "Dec 20, 2024" },
];

const StudentPayments = () => {
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [selectedFee, setSelectedFee] = useState<typeof outstandingFees[0] | null>(null);

  const totalPaid = paymentHistory.reduce((sum, p) => sum + p.amount, 0);
  const totalOutstanding = outstandingFees.reduce((sum, f) => sum + f.amount, 0);

  return (
    <DashboardLayout userType="student" userName="Alex Johnson">
      <div className="space-y-6">
        {/* Header */}
        <div className="animate-slide-up">
          <h1 className="text-3xl font-bold mb-2">Payment Status</h1>
          <p className="text-muted-foreground">View your payment history and manage outstanding fees</p>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-success" />
              </div>
            </div>
            <div className="text-2xl font-bold">${totalPaid.toFixed(2)}</div>
            <div className="text-sm text-muted-foreground">Total Paid</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-warning" />
              </div>
            </div>
            <div className="text-2xl font-bold">${totalOutstanding.toFixed(2)}</div>
            <div className="text-sm text-muted-foreground">Outstanding</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="text-2xl font-bold">Dec 15</div>
            <div className="text-sm text-muted-foreground">Next Due Date</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="text-2xl font-bold">Pro</div>
            <div className="text-sm text-muted-foreground">Current Plan</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Outstanding Fees */}
          <div className="lg:col-span-1 space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card rounded-xl border border-border shadow-soft">
              <div className="p-5 border-b border-border">
                <h2 className="font-semibold text-lg flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-warning" />
                  Outstanding Fees
                </h2>
              </div>
              {outstandingFees.length > 0 ? (
                <div className="divide-y divide-border">
                  {outstandingFees.map((fee) => (
                    <div key={fee.id} className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="font-medium text-sm">{fee.description}</div>
                          <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                            <Clock className="w-3 h-3" />
                            Due: {fee.dueDate}
                          </div>
                        </div>
                        <div className="text-lg font-semibold">${fee.amount.toFixed(2)}</div>
                      </div>
                      <Dialog open={uploadDialogOpen && selectedFee?.id === fee.id} onOpenChange={(open) => {
                        setUploadDialogOpen(open);
                        if (!open) setSelectedFee(null);
                      }}>
                        <DialogTrigger asChild>
                          <Button 
                            size="sm" 
                            className="w-full mt-2"
                            onClick={() => setSelectedFee(fee)}
                          >
                            <Upload className="w-4 h-4 mr-2" />
                            Upload Proof
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Upload Payment Proof</DialogTitle>
                            <DialogDescription>
                              Upload a screenshot or receipt of your payment for verification.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 pt-4">
                            <div className="bg-muted/50 rounded-lg p-4">
                              <div className="text-sm text-muted-foreground mb-1">Amount Due</div>
                              <div className="text-2xl font-bold">${selectedFee?.amount.toFixed(2)}</div>
                              <div className="text-sm text-muted-foreground mt-1">{selectedFee?.description}</div>
                            </div>
                            <div className="space-y-2">
                              <Label>Payment Proof</Label>
                              <Input type="file" accept="image/*,.pdf" />
                              <p className="text-xs text-muted-foreground">
                                Accepted formats: JPG, PNG, PDF (Max 5MB)
                              </p>
                            </div>
                            <div className="space-y-2">
                              <Label>Transaction Reference (Optional)</Label>
                              <Input placeholder="Enter transaction ID or reference" />
                            </div>
                            <Button className="w-full">
                              <Upload className="w-4 h-4 mr-2" />
                              Submit for Verification
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-muted-foreground">
                  <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-success" />
                  <p>No outstanding fees</p>
                </div>
              )}
            </div>

            {/* Payment Progress */}
            <div className="bg-accent/30 rounded-xl p-5 border border-accent/50">
              <h3 className="font-medium mb-3">This Month's Payment</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Status</span>
                <Badge className="bg-success/10 text-success border-success/20">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Paid
                </Badge>
              </div>
              <Progress value={100} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">Next payment due: Dec 15, 2024</p>
            </div>
          </div>

          {/* Payment History */}
          <div className="lg:col-span-2 bg-card rounded-xl border border-border shadow-soft animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="p-5 border-b border-border flex items-center justify-between">
              <h2 className="font-semibold text-lg">Payment History</h2>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left text-sm font-medium text-muted-foreground p-4">Date</th>
                    <th className="text-left text-sm font-medium text-muted-foreground p-4">Description</th>
                    <th className="text-left text-sm font-medium text-muted-foreground p-4">Amount</th>
                    <th className="text-left text-sm font-medium text-muted-foreground p-4">Status</th>
                    <th className="text-right text-sm font-medium text-muted-foreground p-4">Receipt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {paymentHistory.map((payment) => (
                    <tr key={payment.id} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 text-sm">{payment.date}</td>
                      <td className="p-4">
                        <div className="font-medium text-sm">{payment.description}</div>
                      </td>
                      <td className="p-4">
                        <span className="font-semibold">${payment.amount.toFixed(2)}</span>
                      </td>
                      <td className="p-4">
                        <Badge 
                          variant="outline" 
                          className="bg-success/10 text-success border-success/20"
                        >
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          {payment.status}
                        </Badge>
                      </td>
                      <td className="p-4 text-right">
                        <Button variant="ghost" size="icon">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentPayments;
